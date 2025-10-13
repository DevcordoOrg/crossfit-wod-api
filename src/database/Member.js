import rawDB from "./db.json" with { type: "json" };
import { saveToDatabase } from "./utils.js";
const getAllMembers = () => {
    console.log("MemberDB-In");
    const DB = rawDB;
    console.log("MemberDB-Out");
    return DB.members;
};
export default {
    getAllMembers
};
