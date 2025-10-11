import RecordDb from "../database/Record.js";
import type { Record } from "../types/workoutTypes.js";

export const getRecordsForWorkout = (workoutId: string): Record => {
    try {
        const record: Record = RecordDb.getRecordsForWorkout(workoutId);
        return record;
    } catch (error) {
        throw error;
    }
}

export default {
    getRecordsForWorkout
};