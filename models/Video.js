import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUri: {
    type: String,
    required: "File URL is required"
  },
  title: {
    type: String,
    required: "This is requried"
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const model = mongoose.model("video", VideoSchema);

export default model;
