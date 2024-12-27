const express = require("express");
const prisma = require("../db/prisma");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");

router.get("/", verifyToken, async (req, res) => {
  const response = await prisma.patients.findMany({
    where: {
      status: "ACTIVE",
    },
    orderBy: {
      id: "desc",
    },
  });
  res.send(JSON.stringify(response));
});

router.post("/change", verifyToken, async (req, res) => {
  const patient = req.body;
  try {
    await prisma.patients.update({
      where: { id: patient.id },
      data: {
        ...patient,
      },
    });
    res.send({ status: "success" });
  } catch (e) {
    console.log(e);
    res.send({ status: "error", text: JSON.stringify(e) });
  }
});

router.post("/add", verifyToken, async (req, res) => {
  const patient = req.body;
  try {
    await prisma.patients.create({
      data: {
        ...patient,
      },
    });
    res.send({ status: "success" });
  } catch (e) {
    console.log(e);
    res.send({ status: "error", text: JSON.stringify(e) });
  }
});

module.exports = router;
