import {Express} from "express";
import * as bodyParser from "body-parser";
import {VARS} from "../../vars";
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");

export function expressSetup(app: Express) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(cookieSession(
        {
            secret: process.env.AUTH_COOKIE_SECRET,
            cookie: {
                path: '/',
                domain: process.env.AUTH_COOKIE_DOMAIN,
                maxAge: process.env.AUTH_COOKIE_DURATION
            }
        }
    ));
    const port = 3000;

    VARS.EXPRESS = app;
    VARS.HTTP = app.listen(port, () => {
        return console.log(`server is listening on ${port}`);
    });
}
