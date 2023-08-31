import { Router } from "express";
import {
  getProfile,
  getProfileId,
  patchProfile,
} from "../controllers/profile.controller.js";

const router = Router();
router.get("/profile", getProfile);
router.get("/profileId/:id", getProfileId);
router.patch("/edit/profile/:id", patchProfile);

export default router;
