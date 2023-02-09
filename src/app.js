import express from "express";
import morgan from "morgan";

const app = express();

morgan("dev");

app.get("/ping", (req, res) => {
  res.send("Hello world");
});

app.all('/task',(req,res)=>{
  res.send("Hello mundo")
})

app.all('/jeson',(req,res)=>{
  res.json([])
})

export default app;
