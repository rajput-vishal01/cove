import mongoose from "mongoose";
import dns from "dns";

// my pc dns is broken
dns.setServers(["8.8.8.8"]);
dns.setDefaultResultOrder("ipv4first");

export const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database Connected ${conn.connection.host}`);
  } catch (error) {
    console.log("Error Connecting to Database : ", error);
    process.exit(1);
  }
};
