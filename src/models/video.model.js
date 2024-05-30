import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
   {
      videoFile: {
         type: String,
         required: true,
         index: true,
      },
      thumbnail: {
         type: String,
      },
      owner: {
         type: Schema.Types.ObjectId,
         ref: "User",
      },
      title: {
         type: String,
         required: true,
      },
      description: {
         type: String,
         required: true,
         lowercase: true,
      },
      duration: {
         type: Number,
         required: true,
      },
      views: {
         type: Number,
      },
      isPublished: {
         type: Boolean,
         default: true,
      },
   },
   { timestamps }
);
videoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video", videoSchema);
