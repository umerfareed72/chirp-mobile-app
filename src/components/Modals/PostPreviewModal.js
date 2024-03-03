import React from 'react';
import {
  ImageBackground,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {appFonts, colors, size} from '../../utilities';
import {ChangeBackgroundCard} from '../Cards/ChangeBackgroundCard';
import {AppHeader} from '../Headers/AppHeader';
import Video from 'react-native-video';

export const PostPreviewModal = ({
  show,
  onPressHide,
  value,
  onChangeValue,
  url,
  showChangeBackground,
  changeBackground,
  changeBackgroundColors,
  bgColor,
  textColor = colors.g1,
  isVideo,
  title,
}) => {
  return (
    <Modal
      coverScreen={true}
      backdropColor={colors.w1}
      backdropOpacity={1}
      onRequestClose={onPressHide}
      visible={show}>
      <AppHeader
        onPressBack={onPressHide}
        title={title}
        rightButtonText={'Create'}
      />

      <View style={styles.flex1}>
        {isVideo ? (
          <Video
            source={{uri: url}} // Can be a URL or a local file.
            ref={ref => {}} // Store reference
            // onBuffer={.onBuffer} // Callback when remote video is buffering
            // onError={this.videoError} // Callback when video cannot be loaded
            style={styles.backgroundVideo}
          />
        ) : (
          <ImageBackground
            source={{uri: url}}
            style={[
              styles.bgStyle,
              {
                backgroundColor: bgColor,
              },
            ]}>
            <TextInput
              placeholder="Type Something..."
              cursorColor={textColor || colors.w1}
              style={[
                styles.inputStyle,
                {
                  color: textColor,
                },
              ]}
              onChangeText={onChangeValue}
              value={value}
              numberOfLines={1}
              placeholderTextColor={textColor}
            />
          </ImageBackground>
        )}

        <ChangeBackgroundCard
          show={showChangeBackground}
          newList={changeBackgroundColors}
          moreList={changeBackgroundColors}
          onChangeValue={item => {
            changeBackground(item);
          }}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bgStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  flex1: {
    flex: 1,
    justifyContent: 'center',
  },
  inputStyle: {
    fontSize: size.title,
    color: colors.w1,
    fontFamily: appFonts.poppinRegular,
    textAlign: 'center',
    width: '90%',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
