import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
// import blogRoutes from "./routes/blogRoutes.js";
// import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
-

// app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
// app.use("/api/blog", blogRoutes);
// app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
    res.send("Api is runnning...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});








