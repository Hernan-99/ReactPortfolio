import { Router } from "express";
import {
  getProject,
  getProjects,
  postProject,
  patchProject,
  delProject,
} from "../controllers/projects.controller.js";

const router = Router();
router.get("/projects", getProjects);
router.get("/project/:id", getProject);
router.post("/post/project", postProject);
router.patch("/edit/project/:id", patchProject);
router.delete("/del/project/:id", delProject);

export default router;
