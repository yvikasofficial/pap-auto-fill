import express from "express";
import refundRoutes from "./routes/refundRoutes";

const app = express();
app.use(express.json());

const port = 3000;

app.use("/", (req, res) => {
  res.send("working");
});

app.use("/api/refund", refundRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
