import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !password ||
    !email ||
    username === "" ||
    password === "" ||
    email === ""
  ) {
    next(errorHandler(400, "All fields required "));
  }
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = bcryptjs.hashSync(password, salt); 

  try {
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.json({ message: "Signup successful" });
  } catch (error) {
    next(error);
  }
};
