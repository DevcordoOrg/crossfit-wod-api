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
export const getOneMember = (req, res) => {
    const { memberId } = req.params;
    if (!memberId)
        res.status(400).send({ status: "FAILED", data: "Member ID is required" });
    try {
        const member = memberService.getOneMember(memberId);
        res.send({ status: "SUCCESS", results: member ? 1 : 0, data: { member: member } });
    }
    catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};
export default {
    getAllMembers,
    getOneMember
};
