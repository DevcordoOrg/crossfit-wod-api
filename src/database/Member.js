import rawDB from "./db.json" with { type: "json" };
import { saveToDatabase } from "./utils.js";
const getAllMembers = () => {
    console.log("MemberDB-In");
    const DB = rawDB;
    console.log("MemberDB-Out");
    return DB.members;
};
const getOneMember = (memberId) => {
    const DB = rawDB;
    const oneMember = DB.members.find((member) => member.id === memberId);
    return oneMember;
};
export default {
    getAllMembers,
    getOneMember
};
