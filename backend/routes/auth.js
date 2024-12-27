const express = require("express");
const prisma = require("../db/prisma");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { login, password } = req.body;
  console.log(req.body);
  try {
    const user = await prisma.employees.findUnique({
      where: { login, password },
      select: {
        name: true,
        login: true,
        position: true,
        permission: true,
      },
    });
    console.log(user);
    if (!user)
      return res.status(401).json({ error: "Invalid login or password" });
    const token = jwt.sign({ userId: user.id }, process.env.TOKEN_KEY, {
      expiresIn: "24h",
    });
    res.status(200).json({ token, user });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Authentication failed" });
  }
});

module.exports = router;
