export function updateLogoutButtonContent(logoutButton, isLoggedIn) {
    if (logoutButton) {
        logoutButton.innerHTML = isLoggedIn ? "<i class='fa-solid fa-right-from-bracket'></i> Log Out" : "<i class='fa-solid fa-right-to-bracket'></i> Go to login";
    }
}

export function updateMobileLogoutButtonContent(logoutButtonMobile, isLoggedIn) {
    if (logoutButtonMobile) {
        logoutButtonMobile.innerHTML = isLoggedIn ? "<i class='fa-solid fa-right-from-bracket'></i>" : "<i class='fa-solid fa-right-to-bracket'></i>";
        logoutButtonMobile.title = isLoggedIn ? "Log out" : "Go to login";
    }
}