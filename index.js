import express from "express";
import morgan from "morgan";
import helmet from "helmet";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on : http://localhost:${PORT}`);

const handleHome = (req, res) => res.send('hello from test');

const handleProfile = (req, res) => res.send("your proflie");

app.use(helmet());
app.use(morgan("dev"));

const middleware = (req, res, next) => {
  res.send("hungr");
}

app.get("/", middleware, handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);