import dotenv from "dotenv";
import connectDb from "./db/database.js";
import { app } from "./app.js";

dotenv.config({
   path: "./env",
});

connectDb()
.then(() => {
    app.listen(process.env.PORT || 9000, () => {
        console.log(`server is runing on ${process.env.PORT}`);
    })
})