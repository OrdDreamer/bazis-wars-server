import express from "express"
import cors from "cors"
import {getPlayer} from "./utils/getPlayer.js";
import {getChats} from "./utils/getChats.js";
import {getUser} from "./utils/getUser.js";

const app = express();

const hostname = '0.0.0.0';
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    console.log("GET /");
    res.send('Hello World!')
});

app.post('/', (req, res) => {
    const userData = getPlayer(req);
    if (userData) {
        console.log("connect authorized user");
        res.json({
            code: 200,
            data: {
                user: userData
            }
        })
    } else {
        console.log("connect unathorized user");
        res.status(401).json({
            code: 401,
            error: "unathorized user",
        });
    }
});

app.post('/chats', (req, res) => {
    console.log(`Get chats for user ${req.body.user_id}`);
    const chats = getChats(req.body.user_id);
    res.json({
        code: 200,
        data: {
            chats
        }
    });
});

app.post('/user', (req, res) => {
    console.log(`Get user ${req.body.user_id}`);
    const user = getUser(req.body.user_id);
    if (user) {
        res.json({
            code: 200,
            data: {
                user
            }
        });
    } else {
        res.json({
            code: 404,
            error: "Not found user"
        })
    }
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
});