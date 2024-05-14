import express, { Router } from "express"
import { addJobFirestore } from "../controllers/jobController";

// Creating exprss Router
const router : Router = express.Router() ;

//
router.get("/addJob" , addJobFirestore) ;

export default router ;