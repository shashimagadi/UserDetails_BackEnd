const express = require("express");
const { default: mongoose } = require("mongoose");
const mangoose = require("mongoose");
const connectDB = require("./config/db.js");
require("dotenv").config();

const app = express();
app.use(express.json());
const cors = require("cors");
const PORT = process.env.PORT;
app.use(cors());

// Connect to the MongoDB databasenp
connectDB();

app.listen(PORT, () => {
  console.log(`server running ${PORT}`);
});


app.get("/backend", (req,res)=>{
  console.log("backend working");
  
  res.send("backedn working file");
})

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);
