import { NextFunction, Request, Response } from "express";
import { FireStoreDatabase } from "../model/databaseService";

export function addJobFirestore(req : Request , res: Response , next : NextFunction){
    const db = new FireStoreDatabase() ;
    db.testWriteCollection() ;
<<<<<<< HEAD
    res.send("Hello World!") ;
}

export function testScriptFirestore(req : Request , res : Response , next : NextFunction){

=======
    res.send("Hello World!")
>>>>>>> ebbf7e5d18101c2e5eee9cffd8285477327a3fb7
}