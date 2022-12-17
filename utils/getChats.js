import * as fs from "fs";

export function getChats(user_id) {
    let data = JSON.parse(fs.readFileSync("data/chats.json", 'utf8'));
    if (data.chats) {
        return data.chats.filter((chat) => {
            return chat.user_ids.includes(user_id);
        })
    }
    return [];
}