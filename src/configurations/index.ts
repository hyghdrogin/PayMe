import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT,
  APP_NAME: process.env.APP_NAME,
  URL: process.env.MONGO_URL
};

const missingConfig = Object.entries(config)
  .map(([key, value]) => [key, !!value])
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missingConfig.length > 0) {
  throw new Error(`Missing configuration: ${missingConfig.join(",")}`);
}

export default config;
