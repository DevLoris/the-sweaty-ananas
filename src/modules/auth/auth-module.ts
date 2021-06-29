import Module from "../../lib/modules/module";
import {Routes} from "../../lib/modules/routes";
import {VARS} from "../../lib/vars";
import {authCheckMiddleware, visitorCheckMiddleware} from "./middleware/auth-check";

const passport = require("passport");
const twitchStrategy = require("passport-twitch-strategy").Strategy;

export class AuthModule extends Module {
    _routes = [
        new Routes("get", "/", (req, res) => {
            if(req.isAuthenticated()) {
                res.json(req.user);
            }
            else {
                res.send('offline');
            }
        }),
        new Routes("get", "/logged", authCheckMiddleware(), function (req, res) {
            res.json(req.user);
        }),
        new Routes("get", "/auth/twitch", visitorCheckMiddleware(), passport.authenticate("twitch")),
        new Routes("get", "/auth/twitch/callback", passport.authenticate("twitch", { failureRedirect: "/" }), function(req, res) {
            // Successful authentication, redirect home.
            res.redirect("/");
        }),
    ];

    _sockets = [

    ];

    setup() {
        VARS.EXPRESS.use(passport.initialize());
        VARS.EXPRESS.use(passport.session());

        passport.use('twitch', new twitchStrategy({
                clientID: process.env.AUTH_TWITCH_CLIEND_ID,
                clientSecret: process.env.AUTH_TWITCH_CLIEND_SECRET,
                callbackURL: process.env.AUTH_TWITCH_CLIEND_CALLBACK,
                scope: "user_read"
            },
            function(accessToken, refreshToken, profile, done) {
            done(null, profile);
                console.log(profile);
            }
        ));

        passport.serializeUser(function(user, done) {
            done(null, user);
        });

        passport.deserializeUser(function(user, done) {
            done(null, user);
        });

        super.setup();
    }
}
