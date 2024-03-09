import { handleGlobalError } from "../../utils/errorHandler.js";
import { API_AUTH, API_BASE, API_REGISTER } from "../constants.js";
import { authFetch } from "../fetch.js";

/**
 * Gets input from the register page, and uses the API to register account and returns with the API response.
 * @param {string} name 
 * @param {string} email 
 * @param {string} password 
 * @returns response in JSON.
 */
export async function register(name, email, password) {
    try {
        const response = await authFetch(API_BASE + API_AUTH + API_REGISTER, {
            method: "POST",
            body: JSON.stringify({ name, email, password })
        });

        if (response.ok) {
            const data = response.json();
            setTimeout(() => {
                window.location.href = "index.html?msg=Successfully registered the account! Please log in.";
            }, 500);
            return data;
        } else {
            const errorData = await response.json();
            throw new Error("Could not register the account. " + errorData.errors[0].message + ".");
        }

    } catch (error) {
        handleGlobalError(error);
    }
}