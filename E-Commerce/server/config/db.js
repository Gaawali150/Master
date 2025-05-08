 import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI; 
    if (!uri) {
      console.error('❌ MONGO_URI is not defined!');
      process.exit(1);
    }
    await mongoose.connect(uri); 
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;
