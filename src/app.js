import dotenv from "dotenv";
import app from "./config/express";

dotenv.config();

process.on("uncaughtException", (err) => {
  console.error(new Date(), " uncaughtException:", err.message);
});

try {
  app.listen(process.env.PORT).on("listening", async () => {
    console.log(`Server running at http://localhost:${process.env.PORT}/`);
  });
} catch (error) {
  console.log("Error:", error);
}

module.exports = app;
