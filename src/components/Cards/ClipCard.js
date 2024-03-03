import React from 'react';
import {FlatList} from 'react-native';
import {Image, StyleSheet, Text, View} from 'react-native';
import {appIcons, appImages, colors, imgList, WP} from '../../utilities';
import {AppButton} from '../Buttons/AppButton';
import {ClipHeader} from '../Headers/ClipHeader';
import {ClipImageCard} from './ClipImageCard';

export const ClipCard = ({
  onPressDot,
  onPressCross,
  onPressCard,
  onPressCreate,
  onPressClip,
}) => {
  const Part1 = ({icon, h1, h2}) => {
    return (
      <View>
        <ClipHeader
          onPressCross={onPressCross}
          onPressThreeDot={onPressDot}
          icon={icon}
          h1={h1}
          h2={h2}
        />
      </View>
    );
  };

  const Part2 = ({desc}) => {
    return (
      <View>
        <FlatList
          data={imgList}
          renderItem={({item}) => {
            return (
              <ClipImageCard
                icon={item?.name}
                h1={'1.9M'}
                onPress={onPressCard}
              />
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item?.toString()}
        />

        <View style={styles.btnCon}>
          <AppButton
            width={'48%'}
            title={'Create'}
            bgColor={colors.g6}
            shadowColor={colors.g6}
            titleColor={colors.theme_color}
            leftIcon={appIcons.videoColIcon}
            onPress={onPressCreate}
          />
          <AppButton
            width={'48%'}
            title={'My Clips'}
            bgColor={colors.g6}
            shadowColor={colors.g6}
            titleColor={colors.theme_color}
            leftIcon={appIcons.playColorIcon}
            onPress={onPressClip}
          />
        </View>
      </View>
    );
  };

  return (
    <View>
      <Part1
        icon={appIcons.playColorIcon}
        h1={'Victoria Malik'}
        h2={'3 hours ago'}
      />
      <Part2 />
    </View>
  );
};

const styles = StyleSheet.create({
  section4: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  btnCon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  section3: {},
});
