import React, {useState} from 'react';
import {View} from 'react-native';
import {AppButton, AppHeader, UploadPictureCard} from '../../../../components';
import {colors, commonstyles, openDeviceGallery} from '../../../../utilities';

import styles from './styles';

const CreatePage2 = ({navigation, route}) => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null);

  const uploadPhoto = async type => {
    const res = await openDeviceGallery();
    if (res) {
      if (type == 'profile') {
        setProfilePhoto(res?.path);
      } else if (type == 'cover') {
        setCoverPhoto(res?.path);
      }
    }
  };

  return (
    <View style={commonstyles.main}>
      <AppHeader title={'Create Page'} backIcon />
      <View style={commonstyles.contentContainer(colors.w2)}>
        <View style={{marginVertical: 20}}></View>

        <UploadPictureCard
          title={'Profile Picture'}
          subTitle={'Upload Profile Photo'}
          imageUrl={profilePhoto}
          onPress={() => {
            uploadPhoto('profile');
          }}
        />

        <UploadPictureCard
          title={'Cover Picture'}
          subTitle={'Cover Cover Photo'}
          marginTop={25}
          imageUrl={coverPhoto}
          onPress={() => {
            uploadPhoto('cover');
          }}
        />

        <View style={styles.buttonStyle}>
          <AppButton
            width={200}
            height={35}
            onPress={() => {
              navigation?.navigate('PageDetail');
            }}
            title={'Create Page'}
            borderRadius={5}
          />
        </View>
      </View>
    </View>
  );
};

export default CreatePage2;
