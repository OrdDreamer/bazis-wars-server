import * as fs from "fs";

export function getUser(user_id) {
    let data = JSON.parse(fs.readFileSync("data/users.json", 'utf8'));
    if (data.users) {
        const user = data.chats.find((user) => {
            return user.id === user_id;
        })
        return {
            id: user.id,
            name: user.name,
        }
    }
    return null;
}