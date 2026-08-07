import express from "express";
import { env } from "./config/env.js";

const app = express();

const PORT = env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})