import rawDB from "./db.json" with { type: "json" };
import { saveToDatabase } from "./utils.js";
const getRecordsForWorkout = (workoutId) => {
    try {
        const DB = rawDB;
        const record = DB.records.find((record) => record.workout === workoutId);
        if (!record) {
            throw { status: 400, message: `Can't find workout with id: ${workoutId}` };
        }
        return record;
    }
    catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};
export default {
    getRecordsForWorkout
};
