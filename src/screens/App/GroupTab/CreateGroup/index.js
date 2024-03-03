import {Formik} from 'formik';
import React from 'react';
import {View} from 'react-native';
import {
  AppButton,
  AppHeader,
  AppInput,
  GroupCard,
  ScreenHeader,
} from '../../../../components';
import {
  appIcons,
  colors,
  commonstyles,
  groupFormFields,
  GroupVS,
} from '../../../../utilities';
import styles from './styles';

const CreateNewGroup = ({navigation}) => {
  return (
    <View style={commonstyles.main}>
      <AppHeader title={'Create New Group'} backIcon />
      <Formik
        validationSchema={GroupVS}
        initialValues={groupFormFields}
        onSubmit={values => {
          navigation?.navigate('InviteFriend');
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
            <View style={styles.contentCon}>
              <View style={styles.inputCon}>
                <AppInput
                  value={values.groupName}
                  error={errors.groupName}
                  touched={touched.groupName}
                  onChangeText={handleChange('groupName')}
                  placeholder={'Group Name'}
                  onBlur={() => setFieldTouched('groupName')}
                  blurOnSubmit={false}
                  outlineColor={colors.theme_color}
                />
              </View>
            </View>

            <ScreenHeader title={'Select Privacy'} />

            <GroupCard
              data={[
                {
                  id: 0,
                  title: 'Private',
                  isSelected: false,
                  src: appIcons.lockIcon,
                },
                {
                  id: 1,
                  title: 'Public',
                  isSelected: false,
                  src: appIcons.worldIcon,
                },
              ]}
            />
            <View style={styles.buttonCon}>
              <AppButton
                onPress={handleSubmit}
                title={'Create Group'}
                width={'90%'}
                height={35}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default CreateNewGroup;
