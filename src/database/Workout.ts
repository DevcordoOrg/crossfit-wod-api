import type { Database, Workout } from "../types/workoutTypes.js";
import rawDB from "./db.json" with { type: "json" };
import {saveToDatabase} from "./utils.js";

/**
 * @openapi
 * components:
 *   schemas:
 *     Workout:
 *       type: object
 *       properties:
 *         id: 
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name: 
 *           type: string
 *           example: Tommy V  
 *         mode:
 *           type: string
 *           example: For Time
 *         equipment:
 *           type: array
 *           items:
 *             type: string
 *           example: ["barbell", "rope"]
 *         exercises:
 *           type: array
 *           items:
 *             type: string
 *           example: ["21 thrusters", "12 rope climbs, 15 ft", "15 thrusters", "9 rope climbs, 15 ft", "9 thrusters", "6 rope climbs, 15 ft"]
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt: 
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         trainerTips:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Split the 21 thrusters as needed", "Try to do the 9 and 6 thrusters unbroken", "RX Weights: 115lb/75lb"]
 */

const getAllWorkouts = (filterParams: any): Workout[] => {
    const DB: Database = rawDB;

    let workouts: Workout[] = DB.workouts;

    if (filterParams.mode) {
        console.log(`getAllWorkout: Recibio el mode ${filterParams.mode.toLowerCase()}`)
        return workouts.filter((workout) =>
            workout.mode.toLowerCase().includes(filterParams.mode.toLowerCase())
        );
    }

    return workouts;
};

const getOneWorkout = (workoutId: string): Workout | undefined => {
    const DB: Database = rawDB;

    const oneWorkout: Workout | undefined= DB.workouts.find(
        (workout) => workout.id === workoutId
    );
    return oneWorkout;
};


const createNewWorkout = (newWorkout: Required<Workout>) => {

    const DB: Database = rawDB;
    
    const isAlredyAdded: Boolean = DB.workouts.findIndex(
        (workout) => workout.name === newWorkout.name
    ) > -1;

    if (isAlredyAdded) {
        throw{
            status: 500,
            message: "Workout already exists"
        }.message;
    }

    try {
        DB.workouts.push(newWorkout);
        saveToDatabase(DB);

        return newWorkout;        
    } catch (error) {
        throw{
            status: 500,
            message: error
        }.message;
    }
};

const updateOneWorkout = (workoutId: string, chages: Workout): Workout | undefined => {
    const DB: Database = rawDB;
    
    const indexForUpdate: number = DB.workouts.findIndex(
        (workout) => workout.id === workoutId
    );

    if (indexForUpdate === -1) {
        return;
    }

    const updatedWorkout: Workout = {
        ...DB.workouts[indexForUpdate],
        ...chages,
        updatedAt: new Date().toLocaleString("en-US", {timeZone: "America/Bogota"}),
    };

    DB.workouts[indexForUpdate] = updatedWorkout;
    saveToDatabase(DB);

    return updatedWorkout;
};

const deleteOneWorkout = (workoutId: string) => {
    const DB: Database = rawDB;

    const indexForDelete: number = DB.workouts.findIndex(
        (workout) => workout.id === workoutId
    );

    if (indexForDelete === -1) {
        return;
    }

    console.log(indexForDelete)
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