export function logoutHandler() {
    const isLoggedIn = localStorage.getItem("token") && localStorage.getItem("profile");

    if (isLoggedIn) {
        localStorage.removeItem("token");
        localStorage.removeItem("profile");
    } else {
        return;
    }
}