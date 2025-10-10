/**
 * Express server configuration
 */
import express from "express";

import v1WorkoutRouter from "./v1/routes/workoutRoutes.js";



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

/** 
 * 
 * For testing purposes
 * 
 * Commet if used a real route 
 * 
*/
// app.get("/", (req: any, res: any) => {
//     res.send("<h2>It's works!</h2>");
// });

/**
 * Real route from ./src/v1/routes/index.js
 */
app.use("/api/v1/workouts", v1WorkoutRouter);


app.listen(PORT, () => {
    console.log(`🚀Server listening on port ${PORT}`);
});