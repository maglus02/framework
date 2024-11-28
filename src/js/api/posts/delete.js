import { handleGlobalError } from "../../utils/errorHandler.js";
import { API_BASE, API_POSTS } from "../constants.js";
import { authFetch } from "../fetch.js";

export async function deletePostApi(postId) {
    try {
        const response = await authFetch(API_BASE + API_POSTS + "/" + postId , {
            method: "DELETE",
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error("Failed to delete post. " + errorData.errors[0].message + ".");
        }
    } catch (error) {
        handleGlobalError(error);
    }
}