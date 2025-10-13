import { v7 as uuid } from "uuid";
import Memberdb from "../database/Member.js";
export const getAllMembers = () => {
    try {
        const allMembers = Memberdb.getAllMembers();
        return allMembers;
    }
    catch (error) {
        throw ({
            status: 500,
            message: error
        }).message;
    }
};
export const getOneMember = (memberId) => {
    const oneMember = Memberdb.getOneMember(memberId);
    return oneMember;
};
export const createNewMember = (newMember) => {
    const memberToInsert = {
        id: uuid(),
        ...newMember,
        createdAt: new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }),
    };
    const createdMember = Memberdb.createNewMember(memberToInsert);
    return createdMember;
};
export default {
    getAllMembers,
    getOneMember,
    createNewMember
};
