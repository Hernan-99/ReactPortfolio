import { Router } from "express";
import {
  delSocial,
  getSocial,
  getSocials,
  postSocial,
  patchSocial,
} from "../controllers/social.controller.js";

const router = Router();
router.get("/socials", getSocials);
router.get("/social/:id", getSocial);
router.post("/create/social", postSocial);
router.patch("/edit/social/:id", patchSocial);
router.delete("/del/social/:id", delSocial);

export default router;
