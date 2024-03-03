import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {spacing} from '../../../utilities';
import {StoryCard} from '../../Cards/StoryCard';

export const Section1 = ({onPress, onPressCreate, data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={onPressCreate} style={spacing.mx2}>
          <StoryCard profileImg={null} />
        </TouchableOpacity>
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => onPress(item)}
                style={spacing.mx2}>
                <StoryCard
                  storyImage={{uri: item?.stories[0]?.story_image}}
                  profileImg={{uri: item?.user_image}}
                />
              </TouchableOpacity>
            );
          }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={(item, index) => index?.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  contentContainer: {
    flexDirection: 'row',
  },
});
