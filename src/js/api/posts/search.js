import { handleGlobalError } from "../../utils/errorHandler.js";
import { API_BASE, API_POSTS, API_SEARCH } from "../constants.js";
import { authFetch } from "../fetch.js";
import { createPostElement } from "./postElement.js";

export async function getPosts() {
    const feedContainer = document.querySelector(".user-posts");

    const urlParams = new URLSearchParams(window.location.search);
    const searchQ = urlParams.get("query");

    try {
        if (!searchQ) {
            throw new Error("Search ID not found in the URL.");
        }

        const response = await authFetch(API_BASE + API_POSTS + API_SEARCH + searchQ + "&_author=true");

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error("Failed to fetch posts. " + errorData.statusCode + " " + errorData.status + ".");
        }

        const searchH = document.querySelector(".searchH");
        searchH.innerHTML = "Search: " + searchQ;
        document.title = `${searchQ} - Search | Framework`;

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
