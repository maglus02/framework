import { API_BASE, API_POSTS } from "../constants.js";
import { authFetch } from "../fetch.js";
import { handleGlobalError } from "../../utils/errorHandler.js";

export async function updatePostApi(postId, postData) {
    try {
        const response = await authFetch(API_BASE + API_POSTS + "/" + postId, {
            method: "PUT",
            body: JSON.stringify(postData),
        });

        if (response.ok) {
            const updatedPost = await response.json();
            window.location.reload();
            return updatedPost;
        } else {
            const errorData = await response.json();
            throw new Error("Failed to update post. " + errorData.errors[0].message + ".");
        }

    } catch (error) {
        handleGlobalError(error);
    }
}