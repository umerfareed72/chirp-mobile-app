import React, {useState} from 'react';
import {FlatList, Image, View} from 'react-native';
import {
  AppButton,
  AppHeader,
  PhotosCard,
  PostPreviewModal,
  ScreenHeader,
  MediaModal,
} from '../../../../components';
import {
  appIcons,
  appImages,
  colors,
  commonstyles,
  imgList,
  openDeviceVideo,
  spacing,
  WP,
} from '../../../../utilities';
import styles from './styles';

const CreateClip = ({navigation, route}) => {
  const [showModal, setShowModal] = useState(false);
  const [video, setVideo] = useState(null);
  const [showMediaModal, setShowMediaModal] = useState(false);

  // Video Camera
  const openVideoCamera = async () => {
    const res = await openDeviceVideo();
    if (res) {
      setVideo(res);
      setShowModal(true);
    }
  };

  return (
    <View style={commonstyles.main}>
      <AppHeader title={`John's Clips`} backIcon />

      <View
        style={[commonstyles.contentContainer(colors.g18), styles.mainSection]}>
        <AppButton
          width={WP('90%')}
          height={50}
          onPress={() => {
            openVideoCamera();
          }}
          title={'Camera'}
          // marginVertical={20}
          borderRadius={5}
          bgColor={colors.shadowColor}
          shadowColor={colors.shadowColor}
          titleColor={colors.b1}
          leftIcon={appIcons.cameraColorIcon}
          marginTop={10}
        />

        <AppButton
          width={WP('90%')}
          height={50}
          title={'Music'}
          // marginVertical={20}
          borderRadius={5}
          bgColor={colors.shadowColor}
          shadowColor={colors.shadowColor}
          titleColor={colors.b1}
          leftIcon={appIcons.musicIcon}
          marginVertical={10}
          marginTop={15}
          onPress={() => {
            setShowMediaModal(!showMediaModal);
          }}
        />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <ScreenHeader title={'Gallery'} />

          <Image style={styles.bottomIcon} source={appIcons.bottomIcon} />
        </View>
        <FlatList
          data={imgList}
          renderItem={({item}) => {
            return (
              <View style={spacing.m2}>
                <PhotosCard
                  imageUri={item?.name}
                  height={170}
                  width={WP('27.5%')}
                  isBottomVideoIcon
                  disabled={false}
                  onPress={() => {
                    navigation?.navigate('VideoScreen');
                  }}
                />
              </View>
            );
          }}
          numColumns={3}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <PostPreviewModal
        url={video?.path}
        isVideo={true}
        show={showModal}
        onPressHide={() => {
          setShowModal(false);
        }}
        changeBackground={res => {}}
        title={'Create Clip'}
      />

      <MediaModal
        title={'Music Library'}
        show={showMediaModal}
        onPressHide={() => {
          setShowMediaModal(false);
        }}
      />
    </View>
  );
};

export default CreateClip;
