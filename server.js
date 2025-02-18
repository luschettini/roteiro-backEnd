require("dotenv").config();
const express = require("express");
const cors = require("cors");

const usersRoutes = require("./routes/usersRoutes");
app.use("/api", usersRoutes);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
