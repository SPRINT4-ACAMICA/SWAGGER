import { Router } from "express";
import google from "./google.js";
import facebook from "./facebook.js";
import linkedin from "./linkedin.js";
import github from "./github.js";

const router = Router();

router.post("/sign-up", function (req, res) {
  console.log("New request POST to /sign-up");

  console.log(req.body);

  const token = "hfdasjfefee23423fewfrw24234";

  let data = {
    success: true,
    message: `User ${req.body.email} registered correctly`,
    token: token,
    data: req.body,
  };

  res.json(data);
});

router.get("/failed", (req, res) => res.send(" app failed"));

router.use("", google);
router.use("", facebook);
router.use("", linkedin);
router.use("", github);

export default router;
