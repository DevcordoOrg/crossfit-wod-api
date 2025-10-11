import express from "express";
import apicache from "apicache";
import { createNewWorkout, deleteOneWorkout, getAllWorkouts, getOneWorkout, updateOneWorkout } from "../../controllers/workoutController.js";
import { getRecordsForWorkout } from "../../controllers/recordController.js";
const router = express.Router();
const cache = apicache.middleware;
router
    .get("/", cache("2 minutes"), getAllWorkouts)
    .get("/", getAllWorkouts)
    .get("/:workoutId", getOneWorkout)
    .get("/:workoutId/records", getRecordsForWorkout)
    .post("/", createNewWorkout)
    .patch("/:workoutId", updateOneWorkout)
    .delete("/:workoutId", deleteOneWorkout);
export default router;
