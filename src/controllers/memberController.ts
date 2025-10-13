import type { Request, Response } from "express";
import memberService from "../services/memberService.js";
import type { Member } from "../types/workoutTypes.js";

export const getAllMembers = (req: Request, res: Response) => {
    try {
        const allMembers = memberService.getAllMembers();
        res.send({status: "SUCCESS", results: allMembers.length, data: {members: allMembers}});
    } catch (error: any) {
        res.status(error?.status || 500).send({status: "FAILED", data: { error: error?.message || error }});  
    }
}

export const getOneMember = (req: Request, res: Response) => {
    const { memberId } = req.params;
    if (!memberId) 
        res.status(400).send({ status: "FAILED", data: "Member ID is required" });

    try {
        const member: Member | undefined = memberService.getOneMember(memberId!);
        res.send({status: "SUCCESS", results: member ? 1 : 0, data: {member: member}});
    } catch (error: any) {
        res.status(error?.status || 500).send({status: "FAILED", data: { error: error?.message || error }});
    }
}

export default {
    getAllMembers,
    getOneMember

};