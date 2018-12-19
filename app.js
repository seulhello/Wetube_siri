import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json()); //서버야 json을 이해하렴 
app.use(bodyParser.urlencoded({ extended: true })); //서버야 form을 이해하렴 
app.use(helmet());
app.use(morgan("dev"));

// 중간에 middleware로써 마지막 응답을 끊어주는 역할을 할 수 있다.
// const middleware = (req, res, next) => {
//   res.send("hungr");
// }

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;