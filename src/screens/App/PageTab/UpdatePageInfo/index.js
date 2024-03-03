import React, {useRef, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {
  AppButton,
  AppHeader,
  AppInput,
  DropDownSelect,
  DropDownMultipleSelect,
} from '../../../../components';
import {
  appImages,
  colors,
  commonstyles,
  pageVS,
  pageFormFields,
  categoriesData,
} from '../../../../utilities';
import styles from './styles';

import DropDownPicker from 'react-native-dropdown-picker';

import {TagSelect} from 'react-native-tag-select';

import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const UpdatePageInfo = ({navigation, route}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [open1, setOpen1] = useState(false);

  const tag = useRef(null);

  return (
    <View style={commonstyles.main}>
      <AppHeader title={'Update Page Info'} backIcon />
      <View style={commonstyles.contentContainer(colors.w3)}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={{width: '100%'}}>
          <View style={styles.profileSection}>
            <Image style={styles.imageUri} source={appImages.profileImage} />
            <Text style={styles.textStyle}>About</Text>
          </View>

          <Formik
            validationSchema={pageVS}
            initialValues={pageFormFields}
            onSubmit={values => {
              // navigation?.goBack();

              console.log(values);
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
              <View>
                <AppInput
                  value={values.name}
                  error={errors.name}
                  touched={touched.name}
                  placeholder={'Name'}
                  placeholderTextColor={colors.g17}
                  blurOnSubmit={false}
                  onChangeText={handleChange('name')}
                  activeColor={colors.red3}
                />

                <View style={{zIndex: 99999}}>
                  <DropDownMultipleSelect
                    onPressPicker={setOpen1}
                    items={categoriesData}
                    setOpen={setOpen1}
                    open={open1}
                    value={values?.category}
                    setValue={val => {
                      const selectedCategory = val.map(function (item) {
                        return item?.value;
                      });

                      setFieldValue('category', selectedCategory);
                      setOpen1(!open1);
                    }}
                    error={errors?.category}
                    placeholder={'Category'}
                    placeholderTextColor={colors.g17}
                  />
                </View>
                <AppInput
                  value={values.description}
                  error={errors.description}
                  touched={touched.description}
                  placeholder={'Description'}
                  placeholderTextColor={colors.g17}
                  blurOnSubmit={false}
                  height={140}
                  multiline={true}
                  onChangeText={handleChange('description')}
                />
                <AppInput
                  value={values.website}
                  error={errors.website}
                  touched={touched.website}
                  placeholder={'Website'}
                  placeholderTextColor={colors.g17}
                  blurOnSubmit={false}
                  onChangeText={handleChange('website')}
                />
                <AppInput
                  value={values.phone}
                  error={errors.phone}
                  touched={touched.phone}
                  placeholder={'Phone Number'}
                  placeholderTextColor={colors.g17}
                  blurOnSubmit={false}
                  onChangeText={handleChange('phone')}
                />
                <AppInput
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                  placeholder={'Email'}
                  placeholderTextColor={colors.g17}
                  blurOnSubmit={false}
                  onChangeText={handleChange('email')}
                />

                <View style={styles.buttonStyle}>
                  <AppButton
                    width={200}
                    height={35}
                    onPress={handleSubmit}
                    title={'Done'}
                    marginVertical={20}
                    borderRadius={5}
                  />
                </View>
              </View>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default UpdatePageInfo;
