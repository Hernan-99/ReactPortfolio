import { Router } from "express";
import {
  delSocial,
  getSocial,
  getSocials,
  postSocial,
  editSocial,
} from "../controllers/social.controller.js";

const router = Router();
router.get("/socials", getSocials);
router.get("/social/:id", getSocial);
router.post("/create/social", postSocial);
router.patch("/edit/social", editSocial);
router.delete("/del/social", delSocial);

export default router;