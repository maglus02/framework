import { handleGlobalError } from "../../utils/errorHandler.js";
import { API_BASE, API_POSTS } from "../constants.js";
import { authFetch } from "../fetch.js";

export async function submitPost(postData) {
    try {
        const response = await authFetch(API_BASE + API_POSTS, {
            method: "POST",
            body: JSON.stringify(postData)
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            const errorData = await response.json();
            throw new Error("Failed to submit post. " + errorData.errors[0].message + ".");
        }

    } catch (error) {
        handleGlobalError(error);
    }
}