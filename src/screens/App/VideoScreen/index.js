import React from 'react';
import {View} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import {MyStatusBar} from '../../../components';
import {colors} from '../../../utilities';
import {appVideo} from '../../../utilities/assets';
import styles from './styles';

const VideoScreen = props => {
  return (
    <>
      <MyStatusBar backgroundColor={colors.b1} barStyle="dark-content" />
      <View style={[styles.modalContainer]}>
        <View style={[styles.imageBg]}>
          <VideoPlayer
            navigator={props?.navigator}
            onBack={() => {
              props.navigation.goBack();
            }}
            source={appVideo.sample}
          />
        </View>
      </View>
    </>
  );
};

export default VideoScreen;
