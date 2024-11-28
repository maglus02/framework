import { deletePostApi } from "../../api/posts/delete.js";
import { getUserProfileAndPostDetails } from "../../utils/postUtils.js";

export async function deletePost() {
    try {
        const deletePostButton = document.querySelector(".deletePostButton");

        if (deletePostButton) {
            const { userProfile, postDetails } = await getUserProfileAndPostDetails();

            if (userProfile && postDetails.name === userProfile.name) {
                deletePostButton.style.display = "inline-block";
            } else {
                deletePostButton.style.display = "none";
            }

            deletePostButton.addEventListener("click", async () => {
                try {
                    const confirmation = confirm("Are you sure you want to delete this post?");

                    if (confirmation) {
                        const urlParams = new URLSearchParams(window.location.search);
                        const postId = urlParams.get("id");

                        await deletePostApi(postId);
                        window.location.href = "/feed";
                    }
                } catch (error) {
                    handleGlobalError(error);
                }
            });
        }
    } catch (error) {
        handleGlobalError(error);
    }
}