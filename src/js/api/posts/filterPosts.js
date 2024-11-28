import { handleGlobalError } from "../../utils/errorHandler.js";
import { API_BASE, API_POSTS } from "../constants.js";
import { authFetch } from "../fetch.js";
import { createPostElement } from "./postElement.js";

export async function getFilteredPosts(tag) {

    const feedContainer = document.querySelector(".user-posts");

    try {
        const response = await authFetch( API_BASE + API_POSTS + `?_tag=${tag}&_author=true`);

        if (!response.ok) {
            throw new Error (`Error fetching filtered posts: ${response.status}`);
        }

        const data = await response.json();
        const filteredPosts = data.data;

        feedContainer.innerHTML = "";

        for (const post of filteredPosts) {
            const postElement = createPostElement(post, true);
            feedContainer.appendChild(postElement);
        }

    } catch (error) {
        handleGlobalError(error);
    }
}