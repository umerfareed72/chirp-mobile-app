import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  AppButton,
  AppHeader,
  AppInput,
  GroupCard,
  ScreenHeader,
} from '../../../../components';
import {
  appFonts,
  appIcons,
  colors,
  commonstyles,
  groupFormFields,
  GroupVS,
  HP,
  size,
  WP,
} from '../../../../utilities';
import {Formik} from 'formik';
import styles from './styles';
import {CheckBox} from '@rneui/themed';

const CoverPhoto = ({navigation}) => {
  return (
    <View style={commonstyles.main}>
      <AppHeader
        title={'Cover Photo'}
        backIcon
        rightIcon={true}
        rightButtonText={'Continue later'}
        fontSize={size.xxxxtiny}
      />

      <View style={commonstyles.contentContainer(colors.g6)}>
        <ScreenHeader title={'Add a New Cover Photo'} />
        <Text style={styles.regText}>Cover Photo</Text>
        <View style={styles.upCon}>
          <TouchableOpacity style={styles.upButtonCon}>
            <Image
              source={appIcons.imageIcon}
              style={{height: 18, width: 18}}
            />
            <Text
              style={{
                fontFamily: appFonts.poppinRegular,
                fontSize: size.xxxxtiny,
                color: colors.theme_color,
              }}>
              Upload Cover Photo
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonCon}>
          <AppButton
            onPress={() => {
              navigation?.navigate('GroupDescription');
            }}
            title={'Next'}
            width={200}
            height={35}
          />
        </View>
      </View>
    </View>
  );
};

export default CoverPhoto;
