import { getUrlParams } from "./urlParams.js";

export function initializeGlobalErrorHandler() {
    const urlParams = getUrlParams();
    const msg = urlParams.msg;

    if (msg) {
        displayMessage(msg);
    }
}

export function handleGlobalError(error) {
    const errorMessageContainer = document.querySelector(".error-message");

    if (errorMessageContainer) {
        errorMessageContainer.textContent = error;
    }
}

export function displayMessage(msg) {
    const messageContainer = document.querySelector(".message-container");

    if (messageContainer) {
        messageContainer.textContent = msg;
    }
}