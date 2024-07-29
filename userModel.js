import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    fname: {
      type: String,
    },
    lname: {
      type: String,
    },
    mobileNumber: {
      type: Number,
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

const userModel = model("User", userSchema);

export const getUsers = async () => {
  try {
    const userData = await userModel.find();
    if (!userData) {
      return null;
    }

    return userData;
  } catch (error) {
    return null;
  }
};

export const createUser = async (input) => {
  try {
    const newUser = new userModel(input);

    const result = await newUser.save();
    if (!result) {
      return null;
    }

    return result;
  } catch (error) {
    return null;
  }
};

export const deleteUser = async(input) => {
  try{
    const existingUser = new userModel();

    const result = await existingUser.deleteOne(input)
    if(!result){
      return null;
    }

    return result;
  } catch(error){
    return null;
  }
}