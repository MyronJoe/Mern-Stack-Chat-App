import express from "express"
import dotenv from "dotenv"
import authRoutes from "../backend/routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config();

//to pass incoming request with json payload from the req.body
app.use(express.json());

//(1) To manage the routes, we have to create the route file
app.use("/api/auth", authRoutes)

// app.get("/", (req, res) => {
//     //Root Route http://localhost:5000
//     res.send("Hello World!!")
// })



app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server Running on port ${PORT}`)
});