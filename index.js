const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
var cron = require('node-cron');
const { ProgressBar } = require('ascii-progress');
const { TwitterApi } = require("twitter-api-v2");
var cron = require('node-cron');
require('dotenv').config();
const path = require("path");

const client = new TwitterApi({
    appKey: process.env.APP_KEY,
    appSecret: process.env.APP_KEY_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret: process.env.ACCESS_TOKEN_SECRET,
    bearerToken: process.env.BEARER_TOKEN,
});

const rwClient = client.readWrite;

const tweetProgressBar = async () => {
    try {
        const currentData = 1;
        const bar = new ProgressBar({
            schema: ':bar  :current/:total :title',
            blank: '░',
            filled: '█',
            total: 548,
            current: currentData,
            width: 13
        })
        const percentText = 100 - (((548 - currentData) / 548) * 100)
        bar.tick({ title: `${percentText.toFixed(1)}%` })
        const tweetText = ` D-${547 - currentData} until jungkook returns

${bar.raw}

12/12/2023 ➩ ➩ ➩ ➩ ➩ ➩ ➩ 11/6/2025`

        await rwClient.v2.tweet(tweetText);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
};

console.log("cron schedule started <<<30 20 * * *>>>");
cron.schedule("30 20 * * *", () => {
    console.log("calling >>>>>>> tweetProgressBar()");
    tweetProgressBar();
});

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });

app.use(express.static(path.join(__dirname, '/client/build')));
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/client/build/index.html");
//   });

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});

