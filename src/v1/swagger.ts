import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerAutogen from "swagger-autogen";

//Metada info about our API
// const opitions = {
//     definition: {
//         openapi: "3.0.0",
//         info: {
//             title: "Crossfit WOD API",
//             version: "1.0.0",
//         }
//     },
//     apis: ["src/v1/routes/workoutRoutes.ts", "src/database/Workout.ts"],
// };

// // Docs en JSON format
// const swaggerSpec = swaggerJSDoc(opitions);

// // Function to start our docs
// const swaggerDocs = (app: any, port: any) => {
//     app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//     app.get("/api/v1/docs.json", (req: any, res: any) => {
//         res.setHeader("Content-Type", "application/json");
//         res.send(swaggerSpec);
//     });

//     console.log(`📚 Version 1 Docs available at http://localhost:${port}/api/v1/docs`);
// }

// Doc information in JSON format
const outputFile = "./swagger.json";
const endpointsFiles = ["./src/v1/routes/workoutRoutes.ts"];

// Auto
const doc = {
    definition: {
        openapi: "3.0.0",
        info: {
            version: "1.0.0",
            title: "Crossfit WOD API",
            description: "This an API for Crossfit Workouts"
        },
    },
    host: "localhost:3000",
    basePath: "/api/v1/workout", 
    schemes: ["http"] 
}

// Auto
swaggerAutogen(outputFile, endpointsFiles, doc);

// const swaggerDocs = (app: any, port: any) => {
//     app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(doc));
//     app.get("/api/v1/docs.json", (req: any, res: any) => {
//         res.setHeader("Content-Type", "application/json");
//         res.send(swaggerAuto);
//     });

//     console.log(`📚 Version 1 Docs available at http://localhost:${port}/api/v1/docs`);
// }
