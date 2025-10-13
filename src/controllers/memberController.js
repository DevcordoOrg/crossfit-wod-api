import memberService from "../services/memberService.js";
export const getAllMembers = (req, res) => {
    try {
        console.log("Create member Controller - IN");
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
export const createNewMember = (req, res) => {
    const { name, gender, dateOfBirth, email, password } = req.body;
    if (!name ||
        !gender ||
        !dateOfBirth ||
        !email ||
        !password) {
        res.status(400).send({ status: "FAILED", data: "The fields name, gender, dateOfBirth, email and password are required" });
    }
    const newMember = {
        name: name,
        gender: gender,
        dateOfBirth: dateOfBirth,
        email: email,
        password: password
    };
    try {
        console.log("Create Member Controller - IN");
        const createdMember = memberService.createNewMember(newMember);
        console.log("Create member Controller - OUT");
        res.status(201).send({ status: "SUCCESS", data: { member: createdMember } });
    }
    catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};
export default {
    getAllMembers,
    getOneMember,
    createNewMember
};
