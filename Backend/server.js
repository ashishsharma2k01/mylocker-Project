const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const fileRoutes = require("./routes/fileRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/version", (req, res) => {
    res.json({
        version: "new backend"
    });
});

app.use("/api/auth", authRoutes);
app.use("/api/file", fileRoutes);

app.listen(5000, () => {
    console.log("erver running at port 5000")
})