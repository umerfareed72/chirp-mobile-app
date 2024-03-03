import {Formik} from 'formik';
import React, {useState} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  AppButton,
  AppInput,
  AuthBox,
  AuthField,
  AuthFooter,
  DropDownInput,
  MyStatusBar,
} from '../../../components';
import {
  appIcons,
  appImages,
  colors,
  commonstyles,
  gender_list,
  signupFormFields,
  signUpVS,
} from '../../../utilities';
import styles from './styles';

const SignUp = ({navigation}) => {
  const [open1, setOpen1] = useState(false);
  const [gender, setGender] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={appImages.l1} style={styles.imageStyles}>
        <MyStatusBar
          barStyle={'light-content'}
          backgroundColor={'transparent'}
        />

        <View style={styles.firstCon}>
          <AuthBox />
          <Formik
            validationSchema={signUpVS}
            initialValues={signupFormFields}
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
              setFieldValue,
            }) => (
              <View style={styles.contentCon}>
                <AuthField
                  title={'Create a  New Account'}
                  marginVertical={25}
                />
                <View style={styles.inputCon}>
                  <View style={styles.con}>
                    <View style={styles.leftCon}>
                      <AppInput
                        value={values.firstname}
                        error={errors.firstname}
                        touched={touched.firstname}
                        onChangeText={handleChange('firstname')}
                        placeholder={'First name'}
                        onBlur={() => setFieldTouched('firstname')}
                        blurOnSubmit={false}
                        leftIcon={() => {
                          return (
                            <Image
                              source={appIcons.userIcon}
                              style={commonstyles.icon22}
                            />
                          );
                        }}
                      />
                    </View>
                    <View style={styles.leftCon}>
                      <AppInput
                        value={values.lastname}
                        error={errors.lastname}
                        touched={touched.lastname}
                        onChangeText={handleChange('lastname')}
                        placeholder={'Last Name'}
                        onBlur={() => setFieldTouched('lastname')}
                        blurOnSubmit={false}
                        leftIcon={() => {
                          return (
                            <Image
                              source={appIcons.lockIcon}
                              style={commonstyles.icon22}
                            />
                          );
                        }}
                      />
                    </View>
                  </View>
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
                  <AppInput
                    value={values.dob}
                    error={errors.dob}
                    touched={touched.dob}
                    onChangeText={handleChange('dob')}
                    placeholder={'Enter Dob'}
                    onBlur={() => setFieldTouched('dob')}
                    blurOnSubmit={false}
                    leftIcon={() => {
                      return (
                        <Image
                          source={appIcons.calendarIcon}
                          style={commonstyles.icon22}
                        />
                      );
                    }}
                  />
                  <DropDownInput
                    onPressPicker={setOpen1}
                    items={gender_list}
                    setOpen={setOpen1}
                    open={open1}
                    value={gender?.value}
                    setValue={val => {
                      handleChange('gender', val?.value);
                      setGender(val);
                      setFieldValue('gender', val?.value);
                    }}
                    error={errors?.gender}
                    placeholder={'Select gender'}
                    icon={appIcons.genderIcon}
                  />
                </View>

                <View style={styles.btnCon}>
                  <AppButton
                    onPress={handleSubmit}
                    title={'Sign Up'}
                    icon={appIcons.rightArrow}
                  />
                </View>
                <AuthFooter
                  onPress={() => {
                    navigation?.navigate('Login');
                  }}
                  title={'Already have an account? '}
                  subtitle={'Login'}
                  marginVertical={20}
                />
                <Text style={styles.footerStyle}>
                  By clicking Sign Up, you agreed to our
                  <Text style={{color: colors.theme_color}}>
                    {' '}
                    Terms, Privacy and Cookies Policy{' '}
                  </Text>
                  You may receive SMS notifications from us and can otp out at
                  any time.
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
