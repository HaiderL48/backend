import dotenv from "dotenv";
import connectDb from "./db/database.js";
import { app } from "./app.js";

dotenv.config({
   path: "./.env",
});

connectDb()
   .then(() => {
      app.listen(process.env.PORT || 9000, () => {
         console.log(`server is runing on ${process.env.PORT}`);
      });
   })
   .catch((error) => {
      // Log any errors that occur during the database connection
      console.error("Failed to connect to the database:", error);
      process.exit(1); // Exit the process with failure code
   });
