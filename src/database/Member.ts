import type { Database, Member } from "../types/workoutTypes.js";
import rawDB from "./db.json" with { type: "json" };
import {saveToDatabase} from "./utils.js";

const getAllMembers = (): Member[] => {
    console.log("MemberDB-In");
    const DB: Database = rawDB;
    console.log("MemberDB-Out");
    return DB.members;
};

export default {
    getAllMembers
};