import express from "express";
import { createNewWorkout, deleteOneWorkout, getAllWorkouts, getOneWorkout, updateOneWorkout } from "../../controllers/workoutController.js";


const router = express.Router();

router
    .get("/", getAllWorkouts)

    .get("/:workoutId", getOneWorkout)

    .post("/", createNewWorkout)

    .patch("/:workoutId", updateOneWorkout)

    .delete("/:workoutId", deleteOneWorkout);

    export default router;