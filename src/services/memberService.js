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
export default {
    getAllMembers,
    getOneMember
};
