import { getFilteredPosts } from "../api/posts/filterPosts.js";
import { getPosts } from "../api/posts/getAll.js";

export async function feedPage() {
    getPosts();
}

export async function filterPosts() {
    getFilteredPosts();
}