import express from "express";
import cors from "cors";
import { router } from "./routes";

const CorsConfig = {
  origin: "*",
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  credentials: true,
  optionSuccessStatus: 204,
};

const app = express();
app.use(cors(CorsConfig));
app.use(express.json());
app.use(router)

app.listen(3333, () => {
  return console.log("Backend online ✔");
});
