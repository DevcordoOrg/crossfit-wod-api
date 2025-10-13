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
    console.log("Create Member MemberDB - IN");
    const DB = rawDB;
    console.log("Create Member MemberDB - IN-2");
    const isAlredyAdded = DB.members.findIndex((member) => member.name === newMember.name) > -1;
    console.log("Create Member MemberDB - IN-3");
    if (isAlredyAdded) {
        console.log("Create Member MemberDB - IN - 3.1");
        throw {
            status: 500,
            message: "Member already exists"
        }.message;
    }
    console.log("Create Member MemberDB - IN-4");
    try {
        console.log("Create Member MemberDB - IN-5");
        DB.members.push(newMember);
        console.log("Create Member MemberDB - IN-6");
        saveToDatabase(DB);
        console.log("Create Member MemberDB - OUT");
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
