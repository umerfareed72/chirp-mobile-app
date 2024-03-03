import React, {useState} from 'react';
import {ImageBackground, View, FlatList} from 'react-native';
import {AppHeader, ProfileCard, ChatInput} from '../../../../components';
import {appImages, commonstyles, size} from '../../../../utilities';

import styles from './styles';

const LiveVideo = ({navigation, route}) => {
  const [search, setSearch] = useState('');

  return (
    <View style={commonstyles.main}>
      <AppHeader title={'Live Video'} backIcon />

      <ImageBackground
        source={appImages.profileImageLarge}
        style={styles.mainContainer}>
        <View>
          <ProfileCard
            imageUri={appImages.profileImage}
            title={'Vish Patel'}
            onPress={() => {}}
            subHeading={'Live'}
            height={50}
            width={50}
            borderWidth={1}
            borderRadius={25}
            marginTop={20}
          />
        </View>
        <View style={styles.bottomSection}>
          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={({item, index}) => (
              <ProfileCard
                imageUri={appImages.profileImage}
                title={'Vish Patel'}
                onPress={() => {}}
                subHeading={'Lorem Isem'}
                titleFontSize={size.xtiny}
                subHeadingFontSize={size.xxxxtiny}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
          <ChatInput
            width={'85%'}
            inputWidth={'85%'}
            value={search}
            onChangeText={text => {
              setSearch(text);
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LiveVideo;
