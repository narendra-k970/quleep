import mongoose from "mongoose";

const connectDB = async (mongoURL) => {
  try {
    await mongoose.connect(mongoURL);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Error:", error);
    process.exit(1);
  }
};

export default connectDB;
