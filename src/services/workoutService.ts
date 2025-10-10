import {v7 as uuid} from "uuid";
import Workoutdb from "../database/Workout.js";
import type { Workout } from "../types/workoutTypes.js";
import { on } from "events";

export const getAllWorkouts = () => {
    try {
        const allWorkouts = Workoutdb.getAllWorkouts();
        
        return allWorkouts;
    } catch (error) {
        throw new Error(error as string);
    }
};
export const getOneWorkout = (workoutId: string): Workout | undefined => {
    const oneWorkout: Workout | undefined = Workoutdb.getOneWorkout(workoutId);
    return oneWorkout;
};

export const createNewWorkout = (newWorkout: Workout) => {
    const workoutToInsert: Required<Workout> ={
        id: uuid(),
        ...newWorkout,
        createdAt: new Date().toLocaleString("en-US", {timeZone: "America/Bogota"}),
        updatedAt: new Date().toLocaleString("en-US", {timeZone: "America/Bogota"}),      
    }
 
    const createdWorkout = Workoutdb.createNewWorkout(workoutToInsert);

    return createdWorkout;
}; 
export const updateOneWorkout = (workoutId: string, changes: Workout): Workout | undefined => {
    const updatedWorkout: Workout | undefined = Workoutdb.updateOneWorkout(workoutId, changes);

    return updatedWorkout;
};
export const deleteOneWorkout = (workoutId: string) => {
    Workoutdb.deleteOneWorkout(workoutId);
};

export default {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};