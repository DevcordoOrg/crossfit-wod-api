import RecordDb from "../database/Record.js";
export const getRecordsForWorkout = (workoutId) => {
    try {
        const record = RecordDb.getRecordsForWorkout(workoutId);
        return record;
    }
    catch (error) {
        throw error;
    }
};
export default {
    getRecordsForWorkout
};
