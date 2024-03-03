import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {
  AppButton,
  AppInput,
  AuthBox,
  AuthField,
  AuthFooter,
  MyStatusBar,
} from '../../../components';
import {
  appIcons,
  appImages,
  colors,
  commonstyles,
  loginFormFields,
  LoginVs,
  LoginVS,
  spacing,
} from '../../../utilities';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';

const Login = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

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
            validationSchema={LoginVs}
            initialValues={loginFormFields}
            onSubmit={values => {
              navigation?.navigate('App');
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
                <AuthField
                  title={'Login to Your Account'}
                  marginVertical={25}
                />
                <View style={styles.inputCon}>
                  <AppInput
                    value={values.email}
                    error={errors.email}
                    touched={touched.email}
                    onChangeText={handleChange('email')}
                    placeholder={'Email'}
                    onBlur={() => setFieldTouched('email')}
                    blurOnSubmit={false}
                    leftIcon={() => {
                      return (
                        <Image
                          source={appIcons.email}
                          style={commonstyles.icon22}
                        />
                      );
                    }}
                  />
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
                </View>
                <Text
                  onPress={() => {
                    navigation?.navigate('ForgotPassword');
                  }}
                  style={styles.forgotText}>
                  Forgot Password?
                </Text>
                <View style={styles.btnCon}>
                  <AppButton
                    onPress={handleSubmit}
                    title={'Login'}
                    icon={appIcons.rightArrow}
                  />
                </View>
                <AuthFooter
                  onPress={() => {
                    navigation?.navigate('SignUp');
                  }}
                  title={'Don’t have an account? '}
                  subtitle={'Sign up'}
                  marginVertical={20}
                />
              </View>
            )}
          </Formik>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

export default Login;
