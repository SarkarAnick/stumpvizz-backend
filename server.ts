import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import menMatchesRoutes from "./routes/men-matches";
import womenMatchesRoutes from "./routes/women-matches";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/men-matches", menMatchesRoutes);
app.use("/api/women-matches", womenMatchesRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
