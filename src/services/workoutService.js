import { v7 as uuid } from "uuid";
import Workoutdb from "../database/Workout.js";
import { on } from "events";
export const getAllWorkouts = () => {
    try {
        const allWorkouts = Workoutdb.getAllWorkouts();
        return allWorkouts;
    }
    catch (error) {
        throw new Error(error);
    }
};
export const getOneWorkout = (workoutId) => {
    const oneWorkout = Workoutdb.getOneWorkout(workoutId);
    return oneWorkout;
};
export const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        id: uuid(),
        ...newWorkout,
        createdAt: new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }),
    };
    const createdWorkout = Workoutdb.createNewWorkout(workoutToInsert);
    return createdWorkout;
};
export const updateOneWorkout = (workoutId, changes) => {
    const updatedWorkout = Workoutdb.updateOneWorkout(workoutId, changes);
    return updatedWorkout;
};
export const deleteOneWorkout = (workoutId) => {
    Workoutdb.deleteOneWorkout(workoutId);
};
export default {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};
