import type { Database, Member } from "../types/workoutTypes.js";
import rawDB from "./db.json" with { type: "json" };
import {saveToDatabase} from "./utils.js";

const getAllMembers = (): Member[] => {
    console.log("MemberDB-In");
    const DB: Database = rawDB;
    console.log("MemberDB-Out");
    return DB.members;
};

const getOneMember = (memberId: string): Member | undefined => {
    const DB: Database = rawDB;

    const oneMember: Member | undefined = DB.members.find(
        (member) => member.id === memberId
    );
    return oneMember;
} 

export default {
    getAllMembers,
    getOneMember
};