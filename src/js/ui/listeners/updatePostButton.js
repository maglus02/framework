import { getPostDetails } from "../../api/posts/getOne.js";

export async function updatePostButton() {
    const updatePostBtn = document.querySelector("#updatePostButton");
    const editPostForm = document.querySelector(".editPostForm");
    const exitUpdateMode = document.querySelector(".exitUpdateMode");

    const postDetails = await getPostDetails();

    updatePostBtn.addEventListener("click", () => {
        const editedTitleInput = document.querySelector(".editedTitle");
        const editedBodyInput = document.querySelector(".editedBody");
        const editedMediaInput = document.querySelector(".editedMedia");
        const currentPostDetails = document.querySelector(".post")

        editedTitleInput.value = postDetails.title || "";
        editedBodyInput.value = postDetails.body || "";
        editedMediaInput.value = postDetails.media?.url || "";

        editPostForm.style.display = "block";
        currentPostDetails.style.display = "none";
        updatePostBtn.style.display = "none";
        exitUpdateMode.style.display = "inline";
    });
};