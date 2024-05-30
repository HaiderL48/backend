import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
   {
      username: {
         type: String,
         required: true,
         unique: true,
         lowercase: true,
         trim: true,
         index: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
         lowercase: true,
         trim: true,
      },
      fullname: {
         type: String,
         required: true,
         trim: true,
         index: true,
      },
      avatar: {
         type: String, // cloudnairy url
         required: true,
         lowercase: true,
         trim: true,
         
         index: true,
      },
      coverImage: {
         type: String,
      },
      watchHistory: {},
      password: {
         type: String,
      },
      refreshToken: {
         type: String,
      },
   },
   { timestamps }
);
export const User = mongoose.model("User", userSchema);
