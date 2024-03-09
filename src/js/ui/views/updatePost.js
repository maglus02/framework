import { handleGlobalError } from "../../utils/errorHandler.js";
import { getUserProfileAndPostDetails } from "../../utils/postUtils.js";
import { saveChangesButton } from "../listeners/saveChangesButton.js";
import { updatePostButton } from "../listeners/updatePostButton.js";

export async function updatePost() {
    try {
        const updatePostBtn = document.querySelector("#updatePostButton");
        const editPostForm = document.querySelector(".editPostForm");
        const exitUpdateMode = document.querySelector(".exitUpdateMode");

        const { userProfile, postDetails } = await getUserProfileAndPostDetails();

        if (userProfile && postDetails.name === userProfile.name) {
            updatePostBtn.style.display = "inline-block";
        } else {
            updatePostBtn.style.display = "none";
        }

        await updatePostButton();

        exitUpdateMode.addEventListener("click", () => {
            const currentPostDetails = document.querySelector(".post")
            editPostForm.style.display = "none";
            currentPostDetails.style.display = "block";
            exitUpdateMode.style.display = "none";
            updatePostBtn.style.display = "inline-block";
        });

        await saveChangesButton();
    } catch (error) {
        console.error("Error updating post page:", error);
        handleGlobalError(error);
    }
}
