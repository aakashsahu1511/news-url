import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  newsUrl: {
    type: String,
    required: [true, "Please provide a news url"],
  },
  newsSummary: String,
  newsCategory: String,
  newsDate: Date,
});

const Url = mongoose.models.urls || mongoose.model("urls", urlSchema);

export default Url;
