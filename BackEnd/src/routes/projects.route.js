import { Router } from "express";
import { getProjects } from "../controllers/projects.controller.js";
import { getProject } from "../controllers/projects.controller.js";
import { postProject } from "../controllers/projects.controller.js";
import { editProject } from "../controllers/projects.controller.js";
import { delProject } from "../controllers/projects.controller.js";

const router = Router();
router.get("/projects", getProjects);
router.get("/project/:id", getProject);
router.post("/post/project", postProject);
router.patch("/edit/project", editProject);
router.delete("/del/project", delProject);

export default router;
