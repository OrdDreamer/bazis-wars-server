import * as fs from "fs";

function findUser(login, password) {

    let data = JSON.parse(fs.readFileSync("data/users.json", 'utf8'));

    if (data.users) {
        return data.users.find((element) => {
            return element["login"] === login && element["password"] === password;
        })
    }
    return null;
}

export function getPlayer(req) {
    if (!req.body.hasOwnProperty("login") || !req.body.hasOwnProperty("password")) {
        return false;
    }
    return findUser(req.body.login, req.body.password);
}


