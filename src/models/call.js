import mongoose from "mongoose";
const Schema = mongoose.Schema;

// schema for calls in database
const CallSchema = new Schema(
  {
    sId: {
      type: String,
      require: true,
      unique: true,
    },
    status: {
      type: String,
      require: true,
    },
    duration: {
      type: String,
      require: true,
    },
    contact: {
      type: String,
      require: true,
    },
    recordingUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = User = mongoose.model("call", CallSchema);
