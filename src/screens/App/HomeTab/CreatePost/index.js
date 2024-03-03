import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  Keyboard,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {
  AppHeader,
  BottomSheetModal,
  ChangeBackgroundCard,
  MapCard,
  PictureModal,
  RenderAttachment,
} from '../../../../components';
import {
  appIcons,
  appImages,
  changeBackgroundColors,
  colors,
  commonstyles,
  convertLatLong,
  openDeviceCamra,
  openDeviceGallery,
  checkPermission,
} from '../../../../utilities';
import styles from './styles';

import {useIsFocused} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {LocationModal} from '../../../../components/Modals/LocationModal';

import {PERMISSIONS, check, request, RESULTS} from 'react-native-permissions';

const CreatePost = ({navigation, route}) => {
  const {type} = route?.params || '';

  const isFocused = useIsFocused();
  const [showChangeBackground, setShowChangeBackground] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [showModalList, setShowModalList] = useState(true);
  const [textInputArea, setTextInputArea] = useState({
    textColor: colors.g10,
    bgColor: colors.w18,
  });
  const [postInput, setPostInput] = useState('');

  const [attachment, setAttachment] = useState([]);
  const [showPictureModal, setShowPictureModal] = useState(false);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [mapInput, setmapInput] = useState('');
  const [coordinates, setCoordinates] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const [locationAdded, setLocationAdded] = useState(false);
  const mapRef = useRef(null);

  const [locationGranted, setLocationGranted] = useState(false);

  useEffect(() => {}, [isFocused]);

  useEffect(() => {
    handleLocationPermission(false);
  }, []);

  useEffect(() => {
    Keyboard?.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard?.addListener('keyboardDidHide', _keyboardDidHide);

    return () => {
      Keyboard?.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard?.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setKeyboardVisible(true);
  };

  const _keyboardDidHide = () => {
    setKeyboardVisible(false);
  };

  useEffect(() => {
    if (route?.params?.selectedImage && route?.params?.selectedImage != null) {
      setAttachment(route?.params?.selectedImage);
    }
  }, []);

  const changeBackground = item => {
    setTextInputArea(item);
  };

  const showTitle = () => {
    switch (type) {
      case 'post':
        return 'Create Post';
      case 'group':
        return 'Create Post';
      case 'page':
        return 'Post in Page';
      default:
        return '';
    }
  };

  // on Click Post
  const onClickPost = () => {
    navigation?.goBack();
    if (type == 'post') {
    } else if (type == 'group') {
    } else if (type == 'page') {
    }
  };

  // open Gallery
  const openGallery = async () => {
    const res = await openDeviceGallery(true);
    if (res) {
      var array3 = attachment.concat(res);
      const distinctItems = [
        ...new Map(array3.map(item => [item['size'], item])).values(),
      ];
      setAttachment([...distinctItems]);
    }
  };
  // open Camera
  const openCamera = async () => {
    const res = await openDeviceCamra();
    if (res) {
      setAttachment([...attachment, res]);
    }
  };

  //Remove Image & Video Items
  const removeImage = (index, item) => {
    attachment.splice(index, 1);
    setAttachment(
      attachment.filter(item => {
        return item;
      }),
    );
  };

  // onPress Add
  const onPressAdd = async item => {
    // const res = await convertLatLong(item?.address);
    const coordinates = {
      latitude: item?.latitude,
      longitude: item?.longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    };
    relocateLocation(coordinates);
    setLocationAdded(true);
    setShowLocationModal(false);
  };

  // On Send
  const onPressSend = async () => {
    const res = await convertLatLong(mapInput);
    if (res) {
      const coordinates = {
        latitude: res[0]?.position?.lat,
        longitude: res[0]?.position?.lng,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      };
      relocateLocation(coordinates);
    }
    setLocationAdded(true);
    setShowLocationModal(false);
  };

  // Relocate
  const relocateLocation = coord => {
    setTimeout(() => {
      const region = {
        latitude: coord?.latitude || coordinates?.latitude,
        longitude: coord?.longitude || coordinates?.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      };

      setCoordinates(region);
      mapRef?.current?.animateToRegion(region, 500);
    }, 500);
  };

  const handleLocationPermission = async permissionRequested => {
    const res = await checkPermission('location', permissionRequested);

    if (res) {
      setLocationGranted(true);
    }
  };

  return (
    <View style={commonstyles.main}>
      <AppHeader
        title={showTitle()}
        backIcon
        rightButtonText={'Post'}
        rightButtonColor={colors.g4}
        onPressRightIcon={onClickPost}
        disableRightButton={
          postInput != '' || attachment.length > 0 ? false : true
        }
      />
      <View style={commonstyles.contentContainer(colors.g18)}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.infoWrapper}>
            <Image style={styles.avatar} source={appImages.profileImage} />
            <View>
              <Text style={styles.name}>{'Victoria Malik'}</Text>
              <View style={styles.areaWrapper}>
                <TouchableOpacity style={styles.areaOption}>
                  <FontAwesome5Icon
                    style={{marginRight: 5}}
                    name="globe-asia"
                    size={10}
                  />
                  <Text style={styles.dropDownText}>Public</Text>
                  <FontAwesome5Icon
                    style={{marginLeft: 5}}
                    name="chevron-down"
                    size={10}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.areaOption}>
                  <FontAwesome5Icon
                    style={{marginRight: 5}}
                    name="plus"
                    size={10}
                  />
                  <Text style={styles.dropDownText}>Album</Text>
                  <FontAwesome5Icon
                    style={{marginLeft: 5}}
                    name="chevron-down"
                    size={10}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={styles.textInputArea(
              textInputArea?.bgColor,
              attachment.length > 0 ? 40 : 250,
            )}>
            <TextInput
              placeholderTextColor={textInputArea?.textColor}
              placeholder="What on your mind?"
              multiline
              style={[styles.postText]}
              value={postInput}
              onChangeText={setPostInput}
            />
          </View>

          {locationAdded && (
            <MapCard
              mapRef={mapRef}
              onPressRemove={() => {
                setLocationAdded(false);
              }}
              coordinates={coordinates}
            />
          )}
        </KeyboardAwareScrollView>
      </View>

      <View style={styles.imageContainer}>
        <RenderAttachment
          attachment={attachment}
          removeImage={(index, item) => {
            removeImage(index, item);
          }}
          showMore={() => setShowPictureModal(!showPictureModal)}
        />
      </View>

      <ChangeBackgroundCard
        show={showChangeBackground}
        icon
        newList={changeBackgroundColors}
        moreList={changeBackgroundColors}
        onChangeValue={item => {
          changeBackground(item);
        }}
        onPress={() => {
          setShowChangeBackground(!showChangeBackground);
          setShowModal(!showModal);
        }}
      />

      <BottomSheetModal
        show={isKeyboardVisible ? false : showModal}
        showModalList={showModalList}
        data={[
          {
            id: 0,
            title: 'Photo / Video',
            icon: appIcons.galleryColorIcon,
            onPress: () => {
              openGallery();
            },
          },
          {
            id: 1,
            title: 'Tag People',
            icon: appIcons.userTagIcon,
            onPress: () => {
              navigation?.navigate('TagFriend');
            },
          },
          {
            id: 2,
            title: 'Check In',
            icon: appIcons.locationIcon,
            onPress: () => {
              // navigation?.navigate('AddLocation');

              setShowLocationModal(true);
            },
          },
          {
            id: 3,
            title: 'Live Video',
            icon: appIcons.videoColorIcon,
            onPress: () => {
              navigation?.navigate('LiveVideo');
            },
          },
          {
            id: 4,
            title: 'Background Color',
            icon: appIcons.alphaIcon,
            onPress: () => {
              setShowChangeBackground(!showChangeBackground);
              setShowModal(!showModal);
              // setShowModalList(!showModalList);
            },
          },
          {
            id: 5,
            title: 'Camera',
            icon: appIcons.cameraColorIcon,
            onPress: async () => {
              openCamera();
            },
          },
        ]}
        onPressIcon={() => {
          setShowModalList(!showModalList);
        }}
      />

      <PictureModal
        title={'Images'}
        data={attachment}
        show={showPictureModal}
        onPressHide={() => {
          setShowPictureModal(false);
        }}
        onChangeValue={text => {}}
        changeBackground={res => {
          // setTextColor(res);
        }}
        onPressRemove={(index, item) => {
          removeImage(index, item);
        }}
      />

      <LocationModal
        show={showLocationModal}
        onPressHide={() => {
          setShowLocationModal(false);
        }}
        value={mapInput}
        onPressAdd={item => {
          onPressAdd(item);
        }}
        isLocationEnabled={locationGranted}
        onChangeText={text => {
          setmapInput(text);
        }}
        onPressSend={() => {
          onPressSend();
        }}
        onPressLocationEnabled={() => handleLocationPermission(true)}
      />
    </View>
  );
};

export default CreatePost;
