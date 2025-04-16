import express from "express";
import {getPrompts} from "../controllers/prompt.controllers.js";

const router = express.Router();

router.get("/:prompt/:barcode",getPrompts);

export default router;