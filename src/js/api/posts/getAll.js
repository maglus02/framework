import { handleGlobalError } from "../../utils/errorHandler.js";
import { API_BASE, API_POSTS } from "../constants.js";
import { authFetch } from "../fetch.js";
import { createPostElement } from "./postElement.js";

export async function getPosts() {

    const feedContainer = document.querySelector(".user-posts");

    try {
        const response = await authFetch(API_BASE + API_POSTS + "?_author=true");

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error("Failed to fetch posts. " + errorData.statusCode + " " + errorData.status + ".");
        }

        const data = await response.json();

        feedContainer.innerHTML = "";

        for (const post of data.data) {
            const postElemet = createPostElement(post, true);
            feedContainer.appendChild(postElemet);
        }
        
    } catch (error) {
        handleGlobalError(error);
    }
}
