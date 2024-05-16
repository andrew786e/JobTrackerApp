import express, { Router } from "express"
import { addJobFirestore } from "../controllers/jobController";

// Creating exprss Router
const router : Router = express.Router() ;

//
router.get("/addJob" , addJobFirestore) ;

router.post("/addJob" , (req ,res) => {
    console.log(req.body) ;
})

export default router ;