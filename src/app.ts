import dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

import express from "express";
import { translate } from "./translate";
const app = express();

app.get("/translate", async (req, res) => {
  if (!req.query.text) {
    return res.send({
      success: false,
      message: "Query params needed: text, target",
    });
  }

  const result = await translate(
    <string>req.query.text,
    <string>req.query.target
  );
  res.send({
    success: true,
    data: result,
  });
});

const PORT = process.env.PORT || 6004;
app.listen(PORT, () => {
  console.log("Translator is running on " + PORT);
});
