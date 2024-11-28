import { getPosts } from "../api/posts/search.js";

export async function searchPage() {
    getPosts();
}

export function handleSearchKeyPress(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        redirectWithSearchTerm();
    }
}

function redirectWithSearchTerm() {
    const searchInput = document.querySelector(".searchInput");
    const searchInputMobile = document.querySelector(".searchInputMobile");
    const searchTerm = searchInput.value.trim() || searchInputMobile.value.trim();

    if (searchTerm) {
        window.location.href = `../feed/search.html?query=${encodeURIComponent(searchTerm)}`;
    }
}