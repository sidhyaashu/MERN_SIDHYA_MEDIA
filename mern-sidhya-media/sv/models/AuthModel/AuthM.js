import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AuthSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: [String],
    roles: {
      User: {
        type: Number,
        default: 2010,
      },
      Admin: {
        type: Number,
        default: 3010,
      },
      Coadmin: {
        type: Number,
        default: 3011,
      },
      Editor: {
        type: Number,
        default: 4010,
      },
    },
  },
  { timestamps: true }
);

const Auth = mongoose.model('Auth', AuthSchema);
export default Auth