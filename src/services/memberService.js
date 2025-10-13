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
export default {
    getAllMembers
};
