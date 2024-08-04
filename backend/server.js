import path from "path";
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import authRoutes from "../backend/routes/auth.routes.js"
import messageRoutes from "../backend/routes/message.routes.js"
import userRoutes from "../backend/routes/user.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";


const __dirname = path.resolve();

const PORT = process.env.PORT || 5000

dotenv.config();

//to pass incoming request with json payload from the req.body
app.use(express.json());
app.use(cookieParser());

//(1) To manage the routes, we have to create the route file
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)


app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// app.get("/", (req, res) => {
//     //Root Route http://localhost:5000
//     res.send("Hello World!!")
// })



server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server Running on port ${PORT}`)
});