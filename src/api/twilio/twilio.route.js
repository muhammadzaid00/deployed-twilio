import * as endpoints from "../utils/endpoints";
import * as twilioController from "./twilio.controller";

export default (route) => {
  route.post(endpoints.handleCallEndpoint, twilioController.handleCall);
  route.post(endpoints.handleKeyEndpoint, twilioController.handleKey);
  route.get(
    endpoints.handleRecordingEndpoint,
    twilioController.handleRecording
  );
};
