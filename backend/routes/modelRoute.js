import express from "express";
import upload from "../middleware/uploadmodel.js";
import {
  uploadModel,
  saveSettings,
  getSettings,
} from "../controllers/modelController.js";

const router = express.Router();

router.post("/upload-model", upload.single("file"), uploadModel);
router.post("/save-settings", saveSettings);
router.get("/get-settings", getSettings);

export default router;
