import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
  Event,
  useProgress,
} from 'react-native-track-player';
import {appImages} from './assets';

export async function setupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
      ],
      progressUpdateEventInterval: 2,
    });

    isSetup = true;
  } finally {
    return isSetup;
  }
}

export async function addTrack() {
  try {
    await TrackPlayer.add({
      id: 'trackId',
      url: 'https://github.com/ShivamJoker/sample-songs/raw/master/Bad%20Liar.mp3',
      // url: 'https://github.com/ShivamJoker/sample-songs/raw/master/Faded.mp3',
      title: 'Track Title',
      artist: 'Track Artist',
      // duration: 60,
      artwork: appImages.profileImage,
    });
    await TrackPlayer.play();
  } catch {
    console.log('Track not Added');
  }
}

export async function playbackService() {
  // TODO: Attach remote event handlers
}

export async function stopTrack() {
  try {
    await TrackPlayer.reset();
  } catch {
    console.log('Track not Stopped');
  }
}
