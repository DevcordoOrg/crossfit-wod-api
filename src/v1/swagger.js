import swaggerAutogen from "swagger-autogen";
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
};
// Auto
swaggerAutogen(outputFile, endpointsFiles, doc);
