import express from "express";
import cors from "cors";
import profile from "./routes/profile.route.js";
import projects from "./routes/projects.route.js";
import social from "./routes/social.route.js";

const app = express();
app.use(
  cors({
    // origin: "https://hernan-sanchez-portfolio.netlify.app/",
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

app.use(express.json());

app.use("/api", profile);
app.use("/api", projects);
app.use("/api", social);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
