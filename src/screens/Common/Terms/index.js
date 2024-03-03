import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {AppHeader, ScreenHeader} from '../../../components';
import {colors, commonstyles, size, termsData} from '../../../utilities';

import styles from './styles';

const Terms = ({navigation}) => {
  return (
    <View style={commonstyles.main}>
      <AppHeader title={`Terms & Conditions`} backIcon />

      <View style={[commonstyles.contentContainer(colors.g18)]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.tcContainer}
          onScroll={({nativeEvent}) => {}}>
          <ScreenHeader title={'Terms'} fontSize={size.large} />

          <FlatList
            data={termsData}
            renderItem={({item, index}) => {
              return <Text style={styles.textStyle}>{item}</Text>;
            }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index?.toString()}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Terms;
