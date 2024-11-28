import { API_BASE, API_PROFILE, API_PROFILE_POSTS } from "../constants.js";
import { authFetch } from "../fetch.js";

/**
 * Fetches the user profile data when entering a profile page.
 * @param {string} username 
 * @returns User profile from API.
 * @example
 * //Fetch Gemini's profile data
 * const username = "Gemini";
 * const userProfileData = fetchUserProfile(username);
 * // Returns the data for the user Gemini.
 */
export async function fetchUserProfile(username) {
    const response = await authFetch(API_BASE + API_PROFILE + "/" + username);

    if (response.ok) {
        const data = await response.json();
        return data.data;
    } else {
        throw new Error("Failed to fetch user profile. Server returned " + response.status + " " + response.statusText);
    }
}

/**
 * Fetches the users posts.
 * @param {string} username 
 * @returns User's posts from the API.
 * @example
 * //Fetch Gemini's posts
 * const username = "Gemini";
 * const userPosts = fetchUserPosts(username);
 * // Returns all the posts that user Gemini has posted.
 */
export async function fetchUserPosts(username) {
    const response = await authFetch(API_BASE + API_PROFILE + "/" + username + API_PROFILE_POSTS + "?_author=true");

    if (response.ok) {
        const data = await response.json();
        return data.data;

    } else {
        throw new Error("Failed to fetch user posts. Server returned " + response.status + " " + response.statusText);
    }
}