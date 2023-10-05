import express from "express"
import AuthC from "../../controllers/AuthController/AuthC.js";
const router = express.Router()


router.post("/register", AuthC.register);
router.post("/login", AuthC.login);


export default router;