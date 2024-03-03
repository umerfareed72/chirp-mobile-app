import {Formik} from 'formik';
import React, {useRef, useState} from 'react';
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
  AppCheckbox,
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
  profile_uri,
} from '../../../utilities';
import styles from './styles';
import {
  CodeField,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CountDownTimer from 'react-native-countdown-timer-hooks';
const VerifyOTP = ({navigation}) => {
  const [value, setValue] = useState('');
  const [sendCode, setSendCode] = useState(false);
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [resendCode, setResendCode] = useState(false);
  const ref = useRef(null);
  const refTimer = useRef(null);

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
            validationSchema={ForgotVs}
            initialValues={ForgotFormFields}
            onSubmit={values => {}}>
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
                <AuthField title={'Verify Your OTP'} marginVertical={25} />
                <View style={styles.head}>
                  <Image source={{uri: profile_uri}} style={styles.iconStyle} />
                  <Text style={styles.h1}>Alex jack</Text>
                  <Text style={styles.h2}>Chrip user</Text>
                </View>
                {sendCode ? (
                  <View>
                    <CodeField
                      ref={ref}
                      {...codeFieldProps}
                      value={value}
                      onChangeText={val => {
                        setValue(val);
                        if (val.length == 4) {
                        }
                      }}
                      cellCount={4}
                      onSubmitEditing={() => {}}
                      rootStyle={styles.otpInputBox}
                      keyboardType="number-pad"
                      textContentType="oneTimeCode"
                      renderCell={({index, symbol, isFocused}) => (
                        <View
                          key={index}
                          style={[
                            styles.cell,
                            {
                              borderColor: isFocused
                                ? colors.theme_color
                                : colors.g11,
                            },
                          ]}
                          onLayout={getCellOnLayoutHandler(index)}>
                          <Text style={styles.txtStyle}>{symbol}</Text>
                        </View>
                      )}
                    />

                    {/* Resend Timer */}

                    <View style={styles.aiFlexEnd}>
                      <TouchableOpacity
                        disabled={resendCode}
                        onPress={() => {
                          setResendCode(true);
                        }}
                        style={styles.textRow}>
                        <Text style={[styles.resendText]}>
                          Resend code {resendCode && 'in'}
                        </Text>
                        {resendCode && (
                          <>
                            <CountDownTimer
                              ref={refTimer}
                              timestamp={60}
                              timerCallback={timerFlag => {
                                setResendCode(false);
                              }}
                              containerStyle={styles.digitStyle}
                              textStyle={styles.timerText}
                            />
                            <Text style={[styles.timerText]}>sec</Text>
                          </>
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : (
                  <View style={styles.inputCon}>
                    <View style={styles.leftCon}>
                      <Image
                        style={commonstyles.icon22}
                        source={appIcons.phoneIcon}
                      />
                    </View>
                    <View style={styles.rightCon}>
                      <View>
                        <Text style={styles.h1}>Send code via SMS</Text>
                        <Text style={styles.h2}>+***************86</Text>
                      </View>
                      <AppCheckbox
                        selected={sendCode}
                        onPress={() => {
                          setSendCode(!sendCode);
                        }}
                      />
                    </View>
                  </View>
                )}

                <View style={styles.btnCon}>
                  <AppButton
                    onPress={() => {
                      navigation?.navigate('ResetPassword');
                    }}
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

export default VerifyOTP;
