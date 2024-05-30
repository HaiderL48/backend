import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import express from "express"

const connectDb = async () => {
    try {
       const dbConnection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`\nMongoDb Connected !! DB HOST: ${dbConnection.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

export default connectDb