import { getFilteredPosts } from "../src/js/api/posts/filterPosts.js";
import { feedPage } from "../src/js/routes/feed.js";
import { handlePostSubmission } from "../src/js/ui/listeners/post.js";

feedPage();

document.querySelector('.filterForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const filterSelect = document.querySelector(".filterSelect");
    const selectedTag = filterSelect.value;

    getFilteredPosts(selectedTag);
});

document.querySelector('.postForm').addEventListener('submit', handlePostSubmission);