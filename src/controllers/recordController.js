import recordService from "../services/recordService.js";
export const getRecordsForWorkout = (req, res) => {
    const { workoutId } = req.params;
    if (!workoutId)
        res.status(400).send({ status: "FAILED", data: "Workout ID is required" });
    try {
        const record = recordService.getRecordsForWorkout(workoutId);
        res.send({ status: "SUCCESS", data: { record: record } });
    }
    catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message } });
    }
};
