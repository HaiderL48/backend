import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
   {
      
   },
   { timestamps }
);
export const Video = mongoose.model("Video", videoSchema);
