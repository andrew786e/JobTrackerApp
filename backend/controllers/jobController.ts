import { NextFunction, Request, Response } from "express";
import { FireStoreDatabase } from "../model/databaseService";

export function addJobFirestore(req : Request , res: Response , next : NextFunction){
    const db = new FireStoreDatabase() ;
    db.testWriteCollection() ;
    res.send("Hello World!")
}