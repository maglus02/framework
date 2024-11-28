import { logoutHandler } from "../../utils/logoutHandler.js";
import { updateLogoutButtonContent, updateMobileLogoutButtonContent } from "../views/logoutUI.js";

export async function logout() {
    const logoutButton = document.querySelector(".logoutBtn");
    const logoutButtonMobile = document.querySelector(".logoutBtnMobile");
    const isLoggedIn = localStorage.getItem("token") && localStorage.getItem("profile");

    updateLogoutButtonContent(logoutButton, isLoggedIn);
    updateMobileLogoutButtonContent(logoutButtonMobile, isLoggedIn);

    if (logoutButton) {
        logoutButton.addEventListener("click", logoutHandler);
    }

    if (logoutButtonMobile) {
        logoutButtonMobile.addEventListener("click", logoutHandler);
    }
};