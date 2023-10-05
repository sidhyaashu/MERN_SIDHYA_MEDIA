import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AuthSchema = new Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    refreshToken:[String]
},{timestamps:true})

const Auth = mongoose.model('Auth', AuthSchema);
export default Auth