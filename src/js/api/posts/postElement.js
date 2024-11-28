export function createPostElement(post, isFeedPage = true) {
    const userPostUrl = document.createElement("a");
    userPostUrl.href = isFeedPage ? `../posts/post.html?id=${post.id}` : "javascript:void(0)";

    const userPost = document.createElement("div");
    userPost.classList.add("post");

    const userInfo = document.createElement("div");
    userInfo.classList.add("user-info");
    userInfo.innerHTML = `
        <a href="../profile/index.html?name=${post.author.name}"><img src="${post.author.avatar.url}" alt="User Profile"
            class="img-fluid rounded-circle user-profile" onerror="this.src='../src/images/avatar.png';">
        <h6 class="username">@${post.author.name}</h6></a>
    `;

    const postContent = document.createElement("div");
    postContent.classList.add("post-content");
    const postTitle = document.createElement("h3");
    postTitle.textContent = post.title;
    postContent.appendChild(postTitle);
    const postBody = document.createElement("p");
    postBody.textContent = post.body;
    postContent.appendChild(postBody);

    if (post.media) {
        const postMedia = document.createElement("img");
        postMedia.classList.add("img-fluid", "mt-3");
        postMedia.alt = post.media.alt;
        postMedia.src = post.media.url;
        postContent.appendChild(postMedia);
    }

    const postActions = document.createElement("div");
    postActions.classList.add("post-actions");
    postActions.innerHTML = `
        <a><i class="fa-solid fa-heart"></i> ${post._count.reactions}</a>
        <a><i class="fa-solid fa-comment"></i> ${post._count.comments}</a>
        <a><i class="fa-solid fa-share"></i></a>
    `;

    userPostUrl.appendChild(userPost);
    userPost.appendChild(userInfo);
    userPost.appendChild(postContent);
    userPost.appendChild(postActions);

    return userPostUrl;
}