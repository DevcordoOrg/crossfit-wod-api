import {v7 as uuid} from "uuid";
import Memberdb from "../database/Member.js";
import type { Member } from "../types/workoutTypes.js";

export const getAllMembers = () => {
    try {
        const allMembers = Memberdb.getAllMembers();
        return allMembers;
    } catch (error) {
        throw({
            status: 500,
            message: error
        }).message;
    }
}

export const getOneMember = (memberId: string): Member | undefined => {
    const oneMember: Member | undefined = Memberdb.getOneMember(memberId);
    return oneMember;
}

export const createNewMember = (newMember: Member) => {
    const memberToInsert: Required<Member> = {
        id: uuid(),
        ...newMember,
        createdAt: new Date().toLocaleString("en-US", {timeZone: "America/Bogota"}),
        updatedAt: new Date().toLocaleString("en-US", {timeZone: "America/Bogota"}),
    }

    const createdMember = Memberdb.createNewMember(memberToInsert);

    return createdMember;
}

export default {
    getAllMembers,
    getOneMember,
    createNewMember
};