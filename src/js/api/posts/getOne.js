import { handleGlobalError } from "../../utils/errorHandler.js";
import { API_BASE, API_POSTS } from "../constants.js";
import { authFetch } from "../fetch.js";
import { createPostElement } from "./postElement.js";

let currentPostDetails = {};

export async function getPost() {
    const postContainer = document.querySelector(".user-post");

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    try {
        const response = await authFetch(API_BASE + API_POSTS + "/" + postId + "?_author=true");

        if (!postId) {
            throw new Error("Post ID not found in the URL.");
        }

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error("Failed to fetch posts. " + errorData.statusCode + " " + errorData.status + ".");
        }

        const data = await response.json();
        const post = data.data;

        document.title = `${post.author.name}: "${post.title}" | Framework`;

        postContainer.innerHTML = "";

        const postElement = createPostElement(post, false);
        postContainer.appendChild(postElement);

        currentPostDetails = {
            name: post.author.name,
            title: post.title,
            body: post.body,
            media: post.media
        }

        const postLoadedEvent = new Event("postLoaded", { bubbles: true });
        document.dispatchEvent(postLoadedEvent);
    } catch (error) {
        handleGlobalError(error);
    }
}

export async function getPostDetails() {
    return currentPostDetails;
}
