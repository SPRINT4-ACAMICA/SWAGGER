import passport from "passport";
import { Strategy as githubStrategy } from "passport-github";
import dotenv from "dotenv";
dotenv.config();

const strategy_name = "github";

passport.use(
  strategy_name,
  new githubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK,
    },
    function (accessToken, refreshToken, profile, done) {
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
      return done(null, profile);
    }
  )
);
