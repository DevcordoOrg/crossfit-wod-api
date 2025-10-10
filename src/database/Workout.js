import { throws } from "assert";
import rawDB from "./db.json" with { type: "json" };
import { saveToDatabase } from "./utils.js";
const getAllWorkouts = () => {
    const DB = rawDB;
    return DB.workouts;
};
const getOneWorkout = (workoutId) => {
    const DB = rawDB;
    const oneWorkout = DB.workouts.find((workout) => workout.id === workoutId);
    return oneWorkout;
};
const createNewWorkout = (newWorkout) => {
    const DB = rawDB;
    const isAlredyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlredyAdded) {
        throw {
            status: 500,
            message: "Workout already exists"
        }.message;
    }
    try {
        DB.workouts.push(newWorkout);
        saveToDatabase(DB);
        return newWorkout;
    }
    catch (error) {
        throw {
            status: 500,
            message: error
        }.message;
    }
};
const updateOneWorkout = (workoutId, chages) => {
    const DB = rawDB;
    const indexForUpdate = DB.workouts.findIndex((workout) => workout.id === workoutId);
    if (indexForUpdate === -1) {
        return;
    }
    const updatedWorkout = {
        ...DB.workouts[indexForUpdate],
        ...chages,
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }),
    };
    DB.workouts[indexForUpdate] = updatedWorkout;
    saveToDatabase(DB);
    return updatedWorkout;
};
const deleteOneWorkout = (workoutId) => {
    const DB = rawDB;
    const indexForDelete = DB.workouts.findIndex((workout) => workout.id === workoutId);
    if (indexForDelete === -1) {
        return;
    }
    console.log(indexForDelete);
    DB.workouts.splice(indexForDelete, 1);
    saveToDatabase(DB);
};
export default {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};
