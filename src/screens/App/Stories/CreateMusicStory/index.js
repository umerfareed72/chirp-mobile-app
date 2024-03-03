import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import {AppHeader, MusicBox} from '../../../../components';
import {colors, commonstyles} from '../../../../utilities';
import styles from './styles';

import {useIsFocused} from '@react-navigation/native';

import {
  addTrack,
  setupPlayer,
  stopTrack,
} from '../../../../utilities/TrackPlayerServices';

const CreateMusicStory = ({navigation, route}) => {
  const isFocused = useIsFocused();

  const animationRef = useRef(null);
  const [playMusic, setPlayMusic] = useState(false);

  // useEffect(async () => {
  //   if (isFocused) {
  //     await stopTracks();
  //   }
  // }, [isFocused]);

  // useEffect(() => {
  //   toogleMusicPlayer(true);
  // }, [isFocused]);

  const startPlayer = async () => {
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTrack();
    }
  };

  const toogleMusicPlayer = async isMusicPlayed => {
    if (isMusicPlayed) {
      await stopTrack();
    } else {
      await startPlayer();
    }

    setPlayMusic(!isMusicPlayed);
    animationRef.current?.play(0, 60);
  };

  return (
    <View style={commonstyles.main}>
      <AppHeader title={'Music'} />
      <View style={commonstyles.contentContainer(colors.w3)}>
        <View style={styles.mainSection}>
          <MusicBox
            isMusicPlayed={playMusic}
            animationRef={animationRef}
            onPress={() => {
              toogleMusicPlayer(playMusic);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default CreateMusicStory;
