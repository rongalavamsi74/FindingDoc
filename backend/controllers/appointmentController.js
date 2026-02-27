const Appointment = require("../models/Appointment");
const jwt = require("jsonwebtoken");

// CREATE appointment (patient)
exports.createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create({
      userId: req.user.id,
      doctor: req.body.doctor,
      date: req.body.date,
      time: req.body.time,
      status: "pending",
    });

    res.json(appointment);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// GET appointments
exports.getMyAppointments = async (req, res) => {
  try {
    const role = req.user.role;

    // 👨‍⚕️ Doctor → see ALL appointments
    if (role === "doctor") {
      const all = await Appointment.find().sort({ createdAt: -1 });
      return res.json(all);
    }

    // 🧑 Patient → only own appointments
    const mine = await Appointment.find({ userId: req.user.id }).sort({
      createdAt: -1,
    });

    res.json(mine);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
