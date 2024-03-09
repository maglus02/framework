import { getPost } from "../api/posts/getOne.js";
import { deletePost } from "../ui/views/deletePost.js";
import { updatePost } from "../ui/views/updatePost.js";

export async function postPage() {
    getPost();
}

export async function updatePostRoute() {
    document.addEventListener("postLoaded", () => {
        updatePost();
    });
}

export async function deletePostRoute() {
    document.addEventListener("postLoaded", () => {
        deletePost();
    });
}