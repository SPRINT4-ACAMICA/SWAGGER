import passport from "passport";
import { Strategy as linkedinStrategy } from "passport-linkedin-oauth2";
import dotenv from "dotenv";
dotenv.config();

const strategy_name = "linkedin";

passport.use(
  strategy_name,
  new linkedinStrategy(
    {
      clientID: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      callbackURL: process.env.LINKEDIN_CALLBACK,
      scope: ["r_liteprofile", "r_emailaddress"],
    },
    function (accessToken, refreshToken, profile, done) {
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return done(err, user);
      // });
      return done(null, profile);
    }
  )
);
