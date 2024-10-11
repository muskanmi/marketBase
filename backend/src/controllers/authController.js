const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { name, email, password } = req.params;

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(200).json({ message: "User Already Exist" });
    }

    const hashesPassword = bcrypt.hash(password, 10);

    const newUser = await User.create({ name, email, hashesPassword });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(201).json(token);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  registerUser,
};
