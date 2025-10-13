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

export default {
    getAllMembers,
    getOneMember
};