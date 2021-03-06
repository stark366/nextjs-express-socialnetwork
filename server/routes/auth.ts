import { Router } from "express";
const router = Router();
import passport from "passport";

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res, next) => {
    res.redirect("/");
  }
);

router.get("/api/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/api/current_user", (req, res) => {
  if (!req.user) {
    return res.status(401).send();
  }
  res.send(req.user);
});

export default router;
