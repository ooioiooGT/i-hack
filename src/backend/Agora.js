import { channel } from 'diagnostics_channel';
import RtcEngine from 'react-native-agora';

appId = "5682a290fd384242a78369cd7a88ebee"
channelName ="Test"

export const initializeAgora = (appId) => {
  RtcEngine.init({ appId });
};

export const joinChannel = (channelName) => {
  RtcEngine.joinChannel(channelName, null, 0);
};

// Add more functions for handling video and audio calls as needed.
