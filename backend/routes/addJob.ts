import express, { Router } from "express"
import { addJobFirestore } from "../controllers/jobController";

// Creating exprss Router
const router : Router = express.Router() ;

//
router.get("/addJob" , addJobFirestore) ;

<<<<<<< HEAD
router.post("/addJob" , (req ,res) => {
    console.log(req.body) ;
})

=======
>>>>>>> ebbf7e5d18101c2e5eee9cffd8285477327a3fb7
export default router ;