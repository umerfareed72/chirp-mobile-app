import React, {useState} from 'react';
import {View, Image, Text, FlatList} from 'react-native';
import {
  AppHeader,
  SearchInput,
  AuthField,
  AppButton,
  NotificationCard,
  LocationCard,
} from '../../../../components';

import {
  appFonts,
  appIcons,
  appImages,
  colors,
  commonstyles,
  locationsData,
  size,
  spacing,
} from '../../../../utilities';

import styles from './styles';

const AddLocation = ({navigation, route}) => {
  const [isLocationEnabled, setIsLocationEnabled] = useState(true);
  return (
    <View style={commonstyles.main}>
      <AppHeader
        title={'Create Post'}
        backIcon
        rightIconImage={appIcons.sendUpIcon}
      />
      <View style={commonstyles.contentContainer(colors.g18)}>
        <SearchInput
          value={''}
          onChangeText={text => {
            // setSearch(text);
          }}
        />

        {isLocationEnabled ? (
          <FlatList
            data={locationsData}
            renderItem={({item, index}) => (
              <LocationCard
                onPress={({item}) => {
                  // navigation?.goBack({locationAdded: true});
                  navigation?.replace('CreatePost', {
                    locationAdded: true,
                  });
                }}
                title={item}
              />
            )}
            showsHorizontalScrollIndicator={false}
          />
        ) : (
          <View style={styles.mainContainer}>
            <Image style={styles.imageUri} source={appImages.mapImage} />

            <AuthField
              title={'Find Place near you'}
              fontSize={size.large}
              color={colors.b1}
              fontFamily={appFonts.poppinRegular}
            />

            <Text style={styles.smallText}>
              To see places near you, or to check in to a speciific location,
              turn on location services
            </Text>
            <View style={spacing.my2}>
              <AppButton
                width={100}
                height={25}
                onPress={() => {}}
                title={'Turn On'}
                marginVertical={20}
                borderRadius={5}
              />
            </View>

            <AuthField
              title={'Recent Places'}
              fontSize={size.xsmall}
              color={colors.b1}
              fontFamily={appFonts.poppinSemiBold}
              marginVertical={20}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default AddLocation;
