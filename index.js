import express from "express";
import morgan from "morgan";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on : http://localhost:${PORT}`);

const handleHome = (req, res) => res.send('hello from test');

const handleProfile = (req, res) => res.send("your proflie");

const betweenHome = (req, res, next) => {
  console.log("test");
  next();
};

app.use(betweenHome); //global 실행 

app.get("/", handleHome); // 사이에 함수를 넣으면 해당 부분의 url 만 실행된다.

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);