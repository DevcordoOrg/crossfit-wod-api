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

const createNewMember = (newMember: Required<Member>) => {
    const DB: Database = rawDB;
    
    const isAlredyAdded: boolean = DB.members.some(
        (member) => member.name === newMember.name
    );

    if(isAlredyAdded){
        throw{
            status: 500,
            message: "Member already exists"
        }.message;
    }

    try {
        DB.members.push(newMember);
        saveToDatabase(DB);
    
        return newMember;
    } catch (error) {
        throw{
            status: 500,
            message: error
        }.message;        
    }
}

    

export default {
    getAllMembers,
    getOneMember,
    createNewMember
};