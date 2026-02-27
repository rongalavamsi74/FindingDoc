const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  createAppointment,
  getMyAppointments,
} = require("../controllers/appointmentController");

// Patient create
router.post("/", auth, createAppointment);

// Patient + Doctor view
router.get("/", auth, getMyAppointments);

// Doctor accept / reject
router.put("/:id", auth, async (req, res) => {
  try {
    const Appointment = require("../models/Appointment");

    await Appointment.findByIdAndUpdate(req.params.id, {
      status: req.body.status,
    });

    res.json("Updated");
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
