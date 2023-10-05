import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DATABASE_URL, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        });
        console.log("Connected to");
    } catch (err) {
        console.log("err")
    }
}

export default connectDB