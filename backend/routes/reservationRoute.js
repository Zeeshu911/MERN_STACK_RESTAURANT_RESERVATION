import express from "express";
import send_reservation,{getRequest} from "../controller/reservation.js";

const router = express.Router();

router.post("/send", send_reservation);
router.post("/message", getRequest);

export default router;
