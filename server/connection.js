const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://mernchat-yt-user:Vh29z7psN9tN29Sy@cluster0.o3lkljc.mongodb.net/MernchatApp?retryWrites=true&w=majority`,
    // {
    //   userNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
  )
  .then(() => console.log("connected to mongodb"))
  .catch((err) => {
    console.error(err);
  });
