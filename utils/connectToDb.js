import mongoose from "mongoose";

async function connectToDb() {
    try {
      await mongoose.connect('mongodb+srv://petrescurobert94:RbeyEbzMp9YjCSgR@cluster0.d4vygi3.mongodb.net/db-contacts')
      console.log("Database connection successful");
    } catch (error) {
      console.error(error);
      process.exit(1);
      }
  }
export default connectToDb;  