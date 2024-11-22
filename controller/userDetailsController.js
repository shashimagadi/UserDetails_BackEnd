const UserDetails = require("../models/userDetailsModels");

exports.createUser = async (req, res) => {
  try {
    const userDetails = new UserDetails(req.body);
    await userDetails.save();
    res
      .status(201)
      .json({ message: "UserDetails created successfully", userDetails });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const userDetails = await UserDetails.find();
    res.status(200).json(userDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.updateUser = async (req, res) => {
  try {
    const userDetails = await UserDetails.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!userDetails) {
      return res.status(404).json({ message: "UserDetails not found" });
    }
    res
      .status(200)
      .json({ message: "UserDetails updated successfully", userDetails });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userDetails = await UserDetails.findByIdAndDelete(req.params.id);
    if (!userDetails) {
      return res.status(404).json({ message: "UserDetails not found" });
    }
    res.status(200).json({ message: "UserDetails deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
