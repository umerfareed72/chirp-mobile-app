import React, {useState} from 'react';
import {View} from 'react-native';
import {
  AppButton,
  AppHeader,
  AppInput,
  DropDownSelect,
  DropDownMultipleSelect,
} from '../../../../components';
import {
  colors,
  commonstyles,
  pageFormFields,
  pageVS,
  categoriesData,
} from '../../../../utilities';

import styles from './styles';

import {Formik} from 'formik';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const CreatePag1 = ({navigation, route}) => {
  const [value, setValue] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [open1, setOpen1] = useState(false);

  return (
    <View style={commonstyles.main}>
      <AppHeader title={'Create Page'} backIcon />
      <View style={commonstyles.contentContainer(colors.w3)}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={{width: '100%'}}>
          <Formik
            validationSchema={pageVS}
            initialValues={pageFormFields}
            onSubmit={values => {
              navigation?.navigate('CreatePage2');
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
                  keyboardType={'decimal-pad'}
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

export default CreatePag1;
