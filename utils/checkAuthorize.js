export function checkAuthorize(req) {
    if (!req.body.hasOwnProperty("login") || !req.body.hasOwnProperty("password")) {
        return false;
    }
    return true;
}