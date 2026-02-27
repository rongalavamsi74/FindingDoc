const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
exports.register = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json("User already exists");

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashed,
      role: role || "patient", // default patient
    });

    res.json("Registered");
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json("User not found");

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json("Wrong password");

    // IMPORTANT: role comes directly from MongoDB
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
