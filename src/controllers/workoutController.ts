import type { Request, Response } from "express";
import workoutService from "../services/workoutService.js";
import type { Workout } from "../types/workoutTypes.js";

export const getAllWorkouts = (req: Request, res: Response) => {
    try {
        const allWorkouts = workoutService.getAllWorkouts({mode: req.query.mode as string});
        res.send({status: "SUCCESS", results: allWorkouts.length,data: {workouts: allWorkouts}});      
    } catch (error: any) {
        res.status(error?.status || 500).send({status: "FAILED", data: { error: error?.message || error }})
    }
};

export const getOneWorkout = (req: Request, res: Response) => {
        const { workoutId } = req.params;
        if (!workoutId) 
            res.status(400).send({ status: "FAIL", data: "Workout ID is required" });
    
        try{
            const workout: Workout | undefined = workoutService.getOneWorkout(workoutId!);
            res.send({status: "SUCCESS", results: workout ? 1 : 0, data: {workout: workout}});
        }catch(error: any){
            res.status(error?.status || 500).send({status: "FAILED", data: { error: error?.message || error }});
        }
};

export const createNewWorkout = (req: Request, res: Response) => {
        const { body } = req;

        // console.log(body);
    
        if (
            !body.name || 
            !body.mode ||
            !body.equipment ||
            !body.exercises ||
            !body.trainerTips
         ){
            res.status(400).send({status: "FAILED", data: "The fields name, mode, equipment, exercises and trainerTips are required" });
         }
         
         const newWorkout : Workout= {
            name: body.name,
            mode: body.mode,
            equipment: body.equipment,
            exercises: body.exercises,
            trainerTips: body.trainerTips
         }
        try {
            const createdWorkout = workoutService.createNewWorkout(newWorkout);    
            res.status(201).send({status: "SUCCESS ", data: {workout: createdWorkout}});
        } catch (error: any) {
            res.status(error?.status || 500).send({status: "FAILED", data: { error: error?.message || error }});
        }         
};

export const updateOneWorkout = (req: Request, res: Response) => {
        const { workoutId } = req.params;
        const body = req.body;

        if(!workoutId){
            res.status(400).send({ status: "FAILED", data: "Workout ID is required" });
        }

        try {
            const updatedWorkout = workoutService.updateOneWorkout(workoutId!, body);
            res.send({status: "OK", data: updatedWorkout});
        } catch (error: any) {
            res.status(error?.status || 500).send({status: "FAILED", data: { error: error?.message || error }})
        }
};

export const deleteOneWorkout = (req: Request, res: Response) => {
        const { workoutId } = req.params;
    
        if (!workoutId) {
            res.status(400).send({ status: "FAILED", data: "Workout ID is required" });
        }
        
        try {
            workoutService.deleteOneWorkout(workoutId!);
            res.status(204).send({status: "SUCCESS", data: "Workout deleted successfully"});
        } catch (error: any) {
            res.status(error?.status || 500).send({status: "FAILED", data: { error: error?.message || error }});
        }
};

export default {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};