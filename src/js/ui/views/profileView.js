import { createPostElement } from "../../api/posts/postElement.js";

export async function updateProfile(profileData) {
    const usernameElement = document.querySelector(".username-upper");
    const usernameElement2 = document.querySelector(".username-under");
    const avatarElement = document.querySelector(".profile-header img");
    const postsCountElement = document.querySelector(".postCount p");
    const followersCountElement = document.querySelector(".followerCount p");
    const followingCountElement = document.querySelector(".followingCount p");

    usernameElement.textContent = `@${profileData.name}`;
    usernameElement2.textContent = `@${profileData.name}`;
    avatarElement.src = profileData.avatar.url;
    postsCountElement.textContent = profileData._count.posts.toString();
    followersCountElement.textContent = profileData._count.followers.toString();
    followingCountElement.textContent = profileData._count.following.toString();

    document.title = `@${profileData.name} | Framework`;
}

export async function displayUserPosts(posts) {
    const userPostsElement = document.querySelector(".user-posts");

    if (posts.length > 0) {
        userPostsElement.innerHTML = "";

        for (const post of posts) {
            const postElemet = createPostElement(post, true);
            userPostsElement.appendChild(postElemet);
        }
    } else {
        userPostsElement.innerHTML = "<p>No posts available.</p>";
    }
}