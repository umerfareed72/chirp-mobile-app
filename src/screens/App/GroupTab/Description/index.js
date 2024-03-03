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
  ProfileSec1,
  ScreenHeader,
} from '../../../../components';
import {
  appFonts,
  appIcons,
  appImages,
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

const Description = ({navigation}) => {
  return (
    <View style={commonstyles.main}>
      <AppHeader
        title={'Description'}
        backIcon
        rightIcon={true}
        rightButtonText={'Continue later'}
        fontSize={size.xxxxtiny}
      />
      <Formik
        validationSchema={GroupVS}
        initialValues={groupFormFields}
        onSubmit={values => {
          onSubmit(values);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
          setFieldTouched,
        }) => (
          <View style={commonstyles.contentContainer(colors.g6)}>
            <ScreenHeader
              marginTop={20}
              marginBottom={10}
              title={'Add Description'}
            />

            <View style={styles.contentCon}>
              <View style={styles.inputCon}>
                <AppInput
                  value={values.groupName}
                  error={errors.groupName}
                  touched={touched.groupName}
                  onChangeText={handleChange('groupName')}
                  placeholder={'Describe your Group'}
                  onBlur={() => setFieldTouched('groupName')}
                  blurOnSubmit={false}
                  outlineColor={colors.theme_color}
                  height={124}
                  multiline
                />
              </View>
            </View>

            <View style={styles.buttonCon}>
              <AppButton
                onPress={handleSubmit}
                title={'Next'}
                width={200}
                height={35}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Description;
