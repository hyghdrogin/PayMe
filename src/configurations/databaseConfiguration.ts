import mongoose from "mongoose";
import config from ".";

const connectToMongo = async () => {
  try {
    await mongoose.set("strictQuery", false);
    const connection = await mongoose.connect(config.URL as string);
    console.log("Database Connected Successfully!!!");
    return connection;
  } catch (error) {
    console.log("Daabase Connection failed!!", error);
    process.emit("SIGTERM");
    process.exit(1);
  }
};

export default { connectToMongo };
