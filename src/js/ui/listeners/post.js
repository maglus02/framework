import { getPosts } from "../../api/posts/getAll.js";
import { submitPost } from "../../api/posts/post.js";
import { handleGlobalError } from "../../utils/errorHandler.js";
import { postEvents } from "../events/onPost.js";

export async function handlePostSubmission(event) {
    try {
        event.preventDefault();

        const titleInput = document.getElementById("postTitle");
        const bodyInput = document.getElementById("postBody");
        const mediaInput = document.getElementById("postMedia");

        const title = titleInput.value.trim();
        const body = bodyInput.value.trim();
        const mediaUrl = mediaInput.value.trim();

        const postData = {
            title: title,
        };

        if (body !== "") {
            postData.body = body;
        }

        if (mediaUrl !== "") {
            postData.media = {
                url: mediaUrl,
            };
        }

        await submitPost(postData);

        document.dispatchEvent(new Event(postEvents.POST_SUBMITTED));

        titleInput.value = "";
        bodyInput.value = "";
        mediaInput.value = "";

        await fetchAndRenderPosts()
    } catch (error) {
        handleGlobalError(error);
    }
}

async function fetchAndRenderPosts() {
    try {
        await getPosts();
    } catch (error) {
        handleGlobalError(error);
    }
}