import {Formik} from 'formik';
import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  AppButton,
  AppInput,
  AuthBox,
  AuthField,
  MyStatusBar,
} from '../../../components';
import {
  appIcons,
  appImages,
  colors,
  commonstyles,
  ForgotFormFields,
  ForgotVs,
} from '../../../utilities';
import styles from './styles';

const ForgotPassword = ({navigation}) => {
  return (
    <KeyboardAwareScrollView
      style={{backgroundColor: colors.w1}}
      showsVerticalScrollIndicator={false}>
      <ImageBackground source={appImages.l1} style={styles.imageStyles}>
        <MyStatusBar
          barStyle={'light-content'}
          backgroundColor={'transparent'}
        />

        <View style={styles.firstCon}>
          <AuthBox />
          <Formik
            validationSchema={ForgotVs}
            initialValues={ForgotFormFields}
            onSubmit={values => {
              navigation?.navigate('VerifyOTP');
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
              <View style={styles.contentCon}>
                <AuthField title={'Forgot Password'} marginVertical={25} />
                <View style={styles.inputCon}>
                  <AppInput
                    keyboardType={'decimal-pad'}
                    value={values.phone}
                    error={errors.phone}
                    touched={touched.phone}
                    onChangeText={handleChange('phone')}
                    placeholder={'Phone Number'}
                    onBlur={() => setFieldTouched('phone')}
                    blurOnSubmit={false}
                    leftIcon={() => {
                      return (
                        <Image
                          source={appIcons.phoneIcon}
                          style={commonstyles.icon22}
                        />
                      );
                    }}
                  />
                </View>

                <View style={styles.btnCon}>
                  <AppButton
                    onPress={handleSubmit}
                    title={'Submit'}
                    icon={appIcons.rightArrow}
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

export default ForgotPassword;
