import express from "express"
import cors from "cors"
import {checkAuthorize} from "./utils/checkAuthorize.js";

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
    if (checkAuthorize(req)) {
        console.log("connect authorized user");
        res.json({
            data: "Hello World!"
        })
    } else {
        console.log("connect unathorized user");
        res.status(401).json({
            code: 401,
            error: "unathorized user",
        });
    }
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
});