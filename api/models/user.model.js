import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "https://th.bing.com/th/id/R.3c575f7ff4d54a70c2853de961578ab1?rik=1SbUT%2b8mZJ1mNQ&pid=ImgRaw&r=0"
    },
    isAdmin: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema)

export default User;