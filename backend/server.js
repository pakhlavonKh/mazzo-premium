const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
require("dotenv").config();

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

// Register
app.post("/api/register", async (req, res) => {
  const { name, surname, phone, email, password } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, surname, phone, email, password },
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login
app.post("/api/login", async (req, res) => {
  const { phone, password } = req.body;
  const user = await prisma.user.findUnique({ where: { phone } });
  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  res.json({ user });
});

// Place Order
app.post("/api/order", async (req, res) => {
  const { userId, total } = req.body;
  try {
    const order = await prisma.order.create({
      data: { userId, total },
    });
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
