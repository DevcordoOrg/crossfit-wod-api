import type { Request, Response } from "express";
import recordService from "../services/recordService.js";
import type { Record } from "../types/workoutTypes.js";

export const getRecordsForWorkout = (req: Request, res: Response) => {
    const { workoutId } = req.params;
    if (!workoutId) 
        res.status(400).send({ status: "FAILED", data: "Workout ID is required" });

    try {
        const record: Record = recordService.getRecordsForWorkout(workoutId!);
        res.send({status: "SUCCESS", data: {record: record}});

    } catch (error: any) {
        res.status(error?.status || 500).send({status: "FAILED", data: { error: error?.message }});
    }
}