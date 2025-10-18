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
const createNewMember = (newMember) => {
    const DB = rawDB;
    const isAlredyAdded = DB.members.some((member) => member.name === newMember.name);
    if (isAlredyAdded) {
        throw {
            status: 500,
            message: "Member already exists"
        }.message;
    }
    try {
        DB.members.push(newMember);
        saveToDatabase(DB);
        return newMember;
    }
    catch (error) {
        throw {
            status: 500,
            message: error
        }.message;
    }
};
export default {
    getAllMembers,
    getOneMember,
    createNewMember
};
