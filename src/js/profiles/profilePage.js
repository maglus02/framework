import { fetchUserPosts, fetchUserProfile } from "../api/profile/profile.js";
import { displayUserPosts, updateProfile } from "../ui/views/profileView.js";
import { checkAuthentication, getAuthenticatedUser } from "../utils/auth.js";
import { handleGlobalError } from "../utils/errorHandler.js";

export async function initializeProfilePage() {
    try {
        const usernameFromUrl = getUsernameFromUrl();
        const isAuthenticated = checkAuthentication();

        if (!isAuthenticated) {
            throw new Error("Unauthorized.");
        }

        let userProfileData;

        if (!usernameFromUrl) {
            const authenticatedUser = getAuthenticatedUser();
            
            if (!authenticatedUser) {
                throw new Error("Authenticated user not found.");
            }

            userProfileData = await fetchUserProfile(authenticatedUser.name);
        } else {
            userProfileData = await fetchUserProfile(usernameFromUrl);
        }

        const userPosts = await fetchUserPosts(userProfileData.name);

        updateProfile(userProfileData);
        displayUserPosts(userPosts);

        updateProfileLink(userProfileData.name);
    } catch (error) {
        handleGlobalError(error);
    }
}

function updateProfileLink(username) {
    const profileLink = document.querySelector(".btn[href='../profile/']");

    if (profileLink) {
        const updatedHref = `../profile/index.html?name=${username}`;
        profileLink.href = updatedHref;
    }
}

function getUsernameFromUrl() {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get("name");
}