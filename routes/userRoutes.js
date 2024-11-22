const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controller/userDetailsController");

const router = express.Router();

router.post("/createUser", createUser);

router.get("/getAllUsers", getAllUsers);

// router.get("/:id", getUserById);

router.put("/updateUser/:id", updateUser);

router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
