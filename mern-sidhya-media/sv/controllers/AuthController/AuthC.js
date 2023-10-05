import Auth from "../../models/AuthModel/AuthM.js"
import bcrypt from "bcrypt"

/**REGISTER */
const register=async(req,res)=>{
        const {email,password}= req.body
        if(!email || !password){
            return res.status(400).json({
                message:"All feilds required !",
                status:"failed",
            })
        }else{
            const existingUser = await Auth.findOne({email:email}).exec()
            if(existingUser){
                return res.status(400).json({
                    message: "User already exists",
                    status:"failed",
                })
            }else{
                const hashedPwd = await bcrypt.hash(password,10)
                try {
                    const newUser = await Auth.create({
                        email:email,
                        password:hashedPwd
                    })

                    res.status(201).json({
                        message:newUser,
                        status:"success",
                    })
                    
                } catch (error) {
                    res.status(500).json({
                        message:"Please try again",
                        status: "failed",
                        msg: error.message
                    })
                }
            }

        }
}

/**LOGIN */
const login=async(req,res)=>{

}

export default {
  register,
  login,
};