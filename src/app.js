import express from "express";
import morgan from "morgan";
import {v4} from 'uuid';

const app = express();

app.use(express.json());

morgan("dev");

app.get("/ping", (req, res) => {
  res.send("Hello world");
});

app.all("/task", (req, res) => {
  res.send("Hello mundo");
});

app.all("/jeson", (req, res) => {
  res.json([]);
});

app.post("/task", (req, res) => {
  const { title, description } = req.body;
  res.json({
    title,
    description,
    id:'safsdfsadf',
  });
});

export default app;
