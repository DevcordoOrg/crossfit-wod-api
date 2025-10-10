import fs from "fs";
import type { Database, Workout } from "../types/workoutTypes.js";

export const saveToDatabase = (DB: Database) => {
    fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
        encoding: "utf8",
});
}

export default {
    saveToDatabase
};