import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config()

const connectionString = process.env.MONGODB_URL;

(async () => {
  try {
    const db = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database is connected to:', db.connection.name);
  } catch (error) {
    console.log(error);
  }

})();