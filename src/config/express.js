import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import frameguard from "frameguard";

import twilioRoute from "../api/twilio/twilio.route";
// import swaggerDocs from "./swagger";

const { ORIGIN, PORT } = process.env;

const app = express();
const router = express.Router();

// enable parsers
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());

// restricts who can put your site in a frame
app.use(frameguard());

// enable cross-origin requests
app.use(
  cors({
    origin: ORIGIN,
    credentials: true,
  })
);

// route config
twilioRoute(router);

// swagger docs
// swaggerDocs(app, PORT);

app.use(`/api`, router);

app.use((err, req, res) => {
  res.status(400).json({
    status: 400,
    message: err.message,
  });
});

export default app;
