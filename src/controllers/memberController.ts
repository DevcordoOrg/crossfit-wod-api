import type { Request, Response } from "express";
import memberService from "../services/memberService.js";

export const getAllMembers = (req: Request, res: Response) => {
    try {
        const allMembers = memberService.getAllMembers();
        res.send({status: "SUCCESS", results: allMembers.length, data: {members: allMembers}});
    } catch (error: any) {
        res.status(error?.status || 500).send({status: "FAILED", data: { error: error?.message || error }});  
    }
}

export default {
    getAllMembers
};