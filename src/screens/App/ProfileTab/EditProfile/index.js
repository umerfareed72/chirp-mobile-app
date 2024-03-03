import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {AppHeader, ImagePickerModal, ProfileSec6} from '../../../../components';
import {
  appFonts,
  appImages,
  colors,
  commonstyles,
  openDeviceCamra,
  openDeviceGallery,
  size,
} from '../../../../utilities';

const EditProfile = ({navigation}) => {
  const [editable, setEditable] = useState(false);
  const [proName, setProName] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [coverimage, setCoverImage] = useState(null);
  const [profile, setProfile] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const opneGallery = async () => {
    const res = await openDeviceGallery();
    setModalVisible(false);
    if (profile) {
      setImage(res);
    } else {
      setCoverImage(res);
    }
  };

  const opneCamera = async () => {
    const res = await openDeviceCamra();
    setModalVisible(false);
    if (profile) {
      setImage(res);
    } else {
      setCoverImage(res);
    }
  };

  return (
    <View style={commonstyles.main}>
      <AppHeader title={'Edit Profile'} />

      <View style={commonstyles.contentContainer(colors.g6)}>
        <ScrollView>
          <ProfileSec6
            cardTitle={'Profile Name'}
            titleFont={appFonts.poppinSemiBold}
            titleSize={size.large}
            titleColor={colors.theme_color}
            editable={editable}
            onPressEdit={() => {
              setProName('Victoria Malik');
              setEditable(true);
            }}
            cursorColor={colors.theme_color}
            proName={proName}
            onChangeText={item => {
              setProName(item);
            }}
            selectionColor={colors.theme_color}
            name={true}
            placeholder="Victoria Malik"
          />
          <ProfileSec6
            cardTitle={'Profile Picture'}
            titleFont={appFonts.poppinSemiBold}
            titleSize={size.large}
            titleColor={colors.theme_color}
            profileImg={
              image?.path ? {uri: image?.path} : appImages.profileImage
            }
            onPressEdit={() => {
              setModalVisible(true);
              setProfile(true);
            }}
          />
          <ProfileSec6
            cardTitle={'Cover Picture'}
            titleFont={appFonts.poppinSemiBold}
            titleSize={size.large}
            titleColor={colors.theme_color}
            cvrImgSrc={
              coverimage?.path ? {uri: coverimage?.path} : appImages.s1
            }
            coverImg
            onPressEdit={() => {
              setModalVisible(true);
              setProfile(false);
            }}
          />
          <ImagePickerModal
            show={isModalVisible}
            onPressHide={toggleModal}
            onPressCamera={opneCamera}
            onPressGallery={opneGallery}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default EditProfile;
