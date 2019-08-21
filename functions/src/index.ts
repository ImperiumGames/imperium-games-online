import * as functions from "firebase-functions";
import * as express from "express";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

const time = express();

time.get("/timestamp", (request, response) => {
    response.send(`${Date.now()}`);
});

export const app = functions.https.onRequest(time);
