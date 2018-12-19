import express from "express";
import test from "../test";

const videoRouter = express.Router();

videoRouter.get(test.videos, (req, res) => res.send("Videos"));

export default videoRouter;