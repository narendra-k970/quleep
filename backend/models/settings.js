import mongoose from "mongoose";

const SettingsSchema = new mongoose.Schema({
  backgroundColor: { type: String, required: true },
  wireframe: { type: Boolean, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Settings", SettingsSchema);
