import { getPostDetails } from "../api/posts/getOne.js";
import { handleGlobalError } from "./errorHandler.js";

export async function getUserProfileAndPostDetails() {
    try {
        const userProfile = JSON.parse(localStorage.getItem("profile"));
        const postDetails = await getPostDetails();

        return { userProfile, postDetails };
    } catch (error) {
        handleGlobalError(error)
    }
}