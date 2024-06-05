import express from "express"
import dotenv from "dotenv"
import authRoutes from "../backend/routes/auth.routes.js"

const app = express()

dotenv.config();
const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
    //Root Route http://localhost:5000
    res.send("Hello World!!")
})

//(1) To manage the routes, we have to create the route file
app.use("/api/auth", authRoutes)

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));