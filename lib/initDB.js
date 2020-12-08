import mongoose from "mongoose";

const initDB = () => {
  if (mongoose.connections[0].readyState) {
    return console.log("Database Already Connected");
  }

  const db = mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        return console.log("Some error occured in connection with database.");
      } else {
        console.log("Database Connected");
      }
    }
  );
};

export default initDB;
