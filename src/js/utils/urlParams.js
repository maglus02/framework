export function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const paramsObject = {};
    
    for (const [key, value] of params.entries()) {
        paramsObject[key] = value;
    }

    return paramsObject;
}