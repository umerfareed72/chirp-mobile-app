import React from 'react';
import {Modal, StyleSheet, View, Image, FlatList, Text} from 'react-native';

import {
  AppHeader,
  SearchInput,
  AuthField,
  AppButton,
  LocationCard,
  AddressInput,
  ScreenHeader,
} from '../../components';

import {
  appFonts,
  appIcons,
  appImages,
  colors,
  commonstyles,
  HP,
  locationsData,
  size,
  spacing,
  WP,
} from '../../utilities';

export const LocationModal = ({
  show,
  onPressHide,
  title,
  isLocationEnabled,
  onPressAdd,
  value,
  onChangeText,
  onPressSend,
  onPressLocationEnabled,
}) => {
  return (
    <Modal
      coverScreen={true}
      backdropColor={colors.w1}
      backdropOpacity={1}
      onRequestClose={onPressHide}
      visible={show}>
      <View style={commonstyles.main}>
        <AppHeader
          title={'Add Location'}
          backIcon
          onPressBack={onPressHide}
          rightIconImage={appIcons.sendUpIcon}
          onPressRightIcon={onPressSend}
        />
        <View style={commonstyles.contentContainer(colors.g18)}>
          {/* <SearchInput value={''} onChangeText={text => {}} /> */}

          {isLocationEnabled ? (
            <>
              <AddressInput
                onChangeText={text => {
                  onChangeText(text);
                }}
                value={value}
              />

              {!value && (
                <>
                  <ScreenHeader title={'Recent'} />
                  <FlatList
                    data={locationsData}
                    renderItem={({item, index}) => (
                      <LocationCard
                        onPress={() => {
                          onPressAdd(item);
                        }}
                        title={item?.address}
                      />
                    )}
                    showsHorizontalScrollIndicator={false}
                  />
                </>
              )}
            </>
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
                  onPress={onPressLocationEnabled}
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
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: HP(5),
  },
  imageUri: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  smallText: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.tiny,
    textAlign: 'center',
    width: WP('80%'),
    color: colors.g10,
    marginVertical: 10,
  },
});
