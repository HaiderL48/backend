import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
   cors({
      origin: process.env.ORIGIN,
      credentials: true,
   })
);

//this are the configrations
app.use(express.json({ limit: "20kb" }));
app.use(express.json({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import

import userRouter from "./routes/user.routes.js";

app.use("api/v1/users", userRouter);
// routes works like :- https//localhost:8000/users
// after '/users' it will go on 'userRouter' code. and check
// which methods and page needs to be called
// and then that page append to the url 
// like:- https//localhost:8000/users/register
// and this url changes as per page changes

export { app };
