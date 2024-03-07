import { getUrlParams } from "./urlParams.js";

export function initializeGlobalErrorHandler() {
    window.addEventListener('error', (event) => {
        event.preventDefault();
        const error = event.error || new Error('Unknown error');
        handleGlobalError(error);
    });

    window.addEventListener('unhandledrejection', (event) => {
        event.preventDefault();
        const error = event.reason || new Error('Unhandled promise rejection');
        handleGlobalError(error);
    });

    const urlParams = getUrlParams();
    const msg = urlParams.msg;

    if (msg) {
        displayMessage(msg);
    }
}

export function handleGlobalError(error) {
    const errorMessageContainer = document.querySelector('.error-message');

    if (errorMessageContainer) {
        errorMessageContainer.textContent = error;
    }
}

export function displayMessage(msg) {
    const messageContainer = document.querySelector('.message-container');

    if (messageContainer) {
        messageContainer.textContent = msg;
    }
}