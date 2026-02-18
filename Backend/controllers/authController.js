const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");

/* Generate Token */
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

/* REGISTER */
exports.registerUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ email, username, password });

    res.status(201).json({
      _id: user._id,
      email: user.email,
      username: user.username,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* LOGIN */
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Use select to only fetch required fields for faster query
    const user = await User.findOne({ email }).select('_id email username password');

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        email: user.email,
        username: user.username,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};