import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
} from 'react-native';
import {
  AppHeader,
  PhotosCard,
  PostPreviewModal,
  MediaModal,
} from '../../../../components';
import {
  appIcons,
  appImages,
  changeBackgroundColors,
  colors,
  commonstyles,
  imgList,
  openDeviceCamra,
  openDeviceGallery,
  spacing,
  WP,
} from '../../../../utilities';
import styles from './styles';

const CreateStory = ({navigation, params}) => {
  const [showModal, setShowModal] = useState(false);
  const [showMediaModal, setShowMediaModal] = useState(false);
  const [storyText, setStoryText] = useState('');
  const [profileImg, setprofileImg] = useState(null);
  const [textColor, setTextColor] = useState(null);
  const [textArea, settextArea] = useState(false);

  const StoryHeader = ({icon, title, height, width, onPress}) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.cardCon}>
        <Image source={icon} style={styles.iconStyle(height, width)} />
        <Text style={[styles.titleStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const openCamera = async () => {
    const res = await openDeviceCamra();
    if (res) {
      setprofileImg(res);
      setTimeout(() => {
        setShowModal(true);
      }, 300);
    }
  };

  return (
    <View style={commonstyles.main}>
      <AppHeader title={'Create Story'} />
      <View style={commonstyles.contentContainer(colors.w1)}>
        <View style={styles.header}>
          <StoryHeader
            onPress={() => {
              openCamera();
              setTextColor(colors.w1);
              setStoryText('');
              settextArea(false);
            }}
            icon={appIcons.themeCamera}
            title={'Camera'}
          />
          <StoryHeader
            onPress={() => {
              setShowMediaModal(true);
              setTextColor(colors.w1);
              setStoryText('');
              settextArea(false);
            }}
            icon={appIcons.musicIcon}
            title={'Music'}
            height={24}
            width={24}
          />
          <StoryHeader
            icon={appIcons.alphaIcon}
            title={'Text'}
            onPress={() => {
              setprofileImg(null);
              setShowModal(true);
              setTextColor(true);
              settextArea(true);
            }}
          />
        </View>
        <View style={[commonstyles.row, spacing.m2]}>
          <Text style={styles.textStyle}>Gallery</Text>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Coming Soon');
            }}
            style={styles.upButtonCon}>
            <Image source={appIcons.imageIcon} style={styles.smIcon} />
            <Text style={styles.smText}>Select multiple</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={imgList}
            renderItem={({item}) => {
              return (
                <View style={spacing.m1}>
                  <PhotosCard
                    imageUri={item?.name}
                    height={110}
                    width={WP('28.5')}
                    borderRadius={10}
                  />
                </View>
              );
            }}
            numColumns={3}
          />
        </ScrollView>
      </View>
      <PostPreviewModal
        title={'Create Story'}
        url={profileImg?.path}
        show={showModal}
        onPressHide={() => {
          setShowModal(false);
        }}
        value={storyText}
        onChangeValue={text => {
          if (text?.length < 25) {
            setStoryText(text);
          }
        }}
        changeBackgroundColors={changeBackgroundColors}
        showChangeBackground={textArea}
        changeBackground={res => {
          setTextColor(res);
        }}
        bgColor={textColor?.bgColor}
        textColor={textArea ? textColor?.textColor : colors.w1}
      />
      <MediaModal
        title={'Music Library'}
        show={showMediaModal}
        onPressHide={() => {
          setShowMediaModal(false);
        }}
        onPress={() => {
          // setShowMediaModal(false);
          // navigation?.navigate('Stories', {
          //   screen: 'CreateMusicStory',
          // });
        }}
      />
    </View>
  );
};

export default CreateStory;
