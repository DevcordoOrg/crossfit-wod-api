import memberService from "../services/memberService.js";
export const getAllMembers = (req, res) => {
    try {
        const allMembers = memberService.getAllMembers();
        res.send({ status: "SUCCESS", results: allMembers.length, data: { members: allMembers } });
    }
    catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};
export default {
    getAllMembers
};
