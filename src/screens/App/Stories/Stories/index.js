import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {AppHeader, StoryCardBg} from '../../../../components';
import {appImages, colors, commonstyles, spacing} from '../../../../utilities';
import styles from './styles';

const Stories = ({navigation}) => {
  return (
    <View style={commonstyles.main}>
      <AppHeader title={'All Stories'} />
      <View style={commonstyles.contentContainer(colors.w3)}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.listCon}>
            <FlatList
              data={[
                {icon: null},
                {icon: appImages.n1},
                {icon: appImages.n1},
                {icon: appImages.n1},
              ]}
              renderItem={({item}) => {
                return (
                  <View style={styles.itemCon}>
                    <StoryCardBg
                      onPressAdd={() => {
                        navigation?.navigate('CreateStory');
                      }}
                      profileImg={item?.icon}
                    />
                  </View>
                );
              }}
              numColumns={2}
              keyExtractor={(item, index) => index?.toString()}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Stories;
