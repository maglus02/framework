import { handleSearchKeyPress } from "./search.js";

export async function searchHandling() {
    document.querySelector(".searchInput").addEventListener("keypress", handleSearchKeyPress);
    document.querySelector(".searchInputMobile").addEventListener("keypress", handleSearchKeyPress);
}