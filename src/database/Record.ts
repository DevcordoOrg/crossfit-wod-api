import type { Database, Record } from "../types/workoutTypes.js";
import rawDB from "./db.json" with { type: "json" };
import {saveToDatabase} from "./utils.js";

const getRecordsForWorkout = (workoutId: string): Record => {
    try {
        const DB: Database = rawDB;
        const record: Record | undefined= DB.records.find((record) => record.workout === workoutId);

        if(!record){
            throw{status: 400, message: `Can't find workout with id: ${workoutId}`};
        }

        return record;
    } catch (error: any) {
        throw{status: error?.status || 500, message: error?.message || error}; 
    }   
}

export default {
    getRecordsForWorkout
};