import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
  ResetFormFields,
  ResetPasswordVS,
} from '../../../utilities';
import styles from './styles';

const ResetPassword = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntry1, setSecureTextEntry1] = useState(true);

  return (
    <KeyboardAwareScrollView
      style={{backgroundColor: colors.w1}}
      showsVerticalScrollIndicator={false}>
      <ImageBackground source={appImages.l1} style={styles.imageStyles}>
        <MyStatusBar
          barStyle={'light-content'}
          backgroundColor={'transparent'}
        />
        <TouchableOpacity
          onPress={() => {
            navigation?.goBack();
          }}>
          <Image source={appIcons.backArrowIcon} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.firstCon}>
          <AuthBox />
          <Formik
            validationSchema={ResetPasswordVS}
            initialValues={ResetFormFields}
            onSubmit={values => {
              navigation?.navigate('Login');
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
                <AuthField title={'Reset Your Password'} marginVertical={25} />
                <View style={styles.inputCon}>
                  {/* <AppInput
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
                  /> */}

                  <AppInput
                    value={values.password}
                    error={errors.password}
                    touched={touched.password}
                    onChangeText={handleChange('password')}
                    placeholder={'Password'}
                    onBlur={() => setFieldTouched('password')}
                    blurOnSubmit={false}
                    secureTextEntry={secureTextEntry}
                    leftIcon={() => {
                      return (
                        <Image
                          source={appIcons.lockIcon}
                          style={commonstyles.icon22}
                        />
                      );
                    }}
                    onPressRightIcon={() => {
                      setSecureTextEntry(!secureTextEntry);
                    }}
                    rightIcon={() => {
                      return (
                        <Image
                          source={
                            secureTextEntry
                              ? appIcons.showIcon
                              : appIcons.hideIcon
                          }
                          style={[commonstyles.icon22, {tintColor: colors.b3}]}
                        />
                      );
                    }}
                  />

                  <AppInput
                    value={values.confirmPassword}
                    error={errors.confirmPassword}
                    touched={touched.confirmPassword}
                    onChangeText={handleChange('confirmPassword')}
                    placeholder={'Confirm Password'}
                    onBlur={() => setFieldTouched('confirmPassword')}
                    blurOnSubmit={false}
                    secureTextEntry={secureTextEntry1}
                    leftIcon={() => {
                      return (
                        <Image
                          source={appIcons.lockIcon}
                          style={commonstyles.icon22}
                        />
                      );
                    }}
                    onPressRightIcon={() => {
                      setSecureTextEntry1(!secureTextEntry1);
                    }}
                    rightIcon={() => {
                      return (
                        <Image
                          source={
                            secureTextEntry1
                              ? appIcons.showIcon
                              : appIcons.hideIcon
                          }
                          style={[commonstyles.icon22, {tintColor: colors.b3}]}
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

export default ResetPassword;
