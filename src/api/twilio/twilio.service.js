import twilio from "twilio";

import * as endpoints from "../utils/endpoints";
import * as recordingMessages from "../../utils/recordingMessages";

const twiml = new twilio.twiml.VoiceResponse();
const { AGNET_NUMBER } = process.env;

export const handleCallService = () => {
  try {
    const gather = twiml.gather({
      numDigits: 1,
      action: `/api${endpoints.handleKeyEndpoint}`,
      method: "POST",
      timeout: 5,
    });
    gather.say(recordingMessages.welcomeMessage);

    return twiml.toString();
  } catch (error) {
    throw error;
  }
};

export const handleKeyService = (key) => {
  try {
    if (!key) {
      throw new Error();
    }

    if (key === "1") {
      twiml.dial(AGNET_NUMBER);
    } else if (key === "2") {
      twiml.record({
        action: `/api${endpoints.handleRecordingEndpoint}`,
        method: "GET",
      });
    } else {
      twiml.say(recordingMessages.invalidOptionMessage);
    }
  } catch (error) {
    throw error;
  }
};
