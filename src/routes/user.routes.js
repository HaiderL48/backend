import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router()

router.route("/register").post(registerUser)

// here this '/register' gets appended with url coming from
// app.js


// eg :-
// router.route("/login").post(userLogin)
// if user clicks on login page then it effect this above 
// method and go to the login code

export default router