import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) => res.send('hello from test');

const handleProfile = (req, res) => res.send("your proflie");

app.use(cookieParser());
app.use(bodyParser.json()); //서버야 json을 이해하렴 
app.use(bodyParser.urlencoded({ extended: true })); //서버야 form을 이해하렴 
app.use(helmet());
app.use(morgan("dev"));

// 중간에 middleware로써 마지막 응답을 끊어주는 역할을 할 수 있다.
// const middleware = (req, res, next) => {
//   res.send("hungr");
// }

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;