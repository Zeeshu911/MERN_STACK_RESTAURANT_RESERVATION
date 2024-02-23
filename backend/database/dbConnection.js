const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS",
    });
    console.log("Connected to database!");
  } catch (error) {
    console.error(`Error connecting to database: ${error.message}`);
    // Optionally, you can rethrow the error here if you want the calling code to handle it.
    // throw error;
  }
};

module.exports = connectToDatabase;

