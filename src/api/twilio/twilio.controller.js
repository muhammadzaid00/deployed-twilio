import * as twilioService from "./twilio.service";

// Create a Twilio TwiML (Twilio Markup Language) app to handle incoming calls
export const handleCall = async (req, res) => {
  try {
    const response = twilioService.handleCallService();

    res.type("text/xml");
    res.send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error });
  }
};

// handle the key press from the caller
export const handleKey = (req, res) => {
  try {
    const key = req.body.Digits;

    const response = twilioService.handleKeyService(key);

    res.type("text/xml");
    res.send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error });
  }
};

// handle the voicemail recording
export const handleRecording = (req, res) => {
  try {
    res.send("Voicemail recorded");
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error });
  }
};
