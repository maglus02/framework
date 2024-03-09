import { updatePostApi } from "../../api/posts/update.js";
import { handleGlobalError } from "../../utils/errorHandler.js";

export async function saveChangesButton() {
    const saveChangesBtn = document.querySelector(".saveChangesButton");

    saveChangesBtn.addEventListener("click", async () => {
        const editedTitle = document.querySelector(".editedTitle").value;
        const editedBody = document.querySelector(".editedBody").value;
        const editedMedia = document.querySelector(".editedMedia").value;

        try {
            const updatedPostData = {
                title: editedTitle,
            };

            if (editedBody.trim() !== "") {
                updatedPostData.body = editedBody.trim();
            }

            if (editedMedia.trim() !== "") {
                updatedPostData.media = {
                    url: editedMedia.trim(),
                };
            }

            const urlParams = new URLSearchParams(window.location.search);
            const postId = urlParams.get("id");

            await updatePostApi(postId, updatedPostData);
        } catch (error) {
                handleGlobalError(error);
        }
    });
};