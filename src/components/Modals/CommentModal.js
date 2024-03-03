import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {appFonts, colors, size} from '../../utilities';
import {CommentsCard} from '../Cards/CommentsCard';
import {ChatInput} from '../Inputs/ChatInput';

export const CommentModal = ({show, onPress, data, height}) => {
  const renderItems = ({item}) => {
    return (
      <View>
        <CommentsCard />
      </View>
    );
  };
  return (
    <RBSheet
      ref={show}
      //   height={329}
      closeOnDragDown={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        draggableIcon: {
          backgroundColor: colors.theme_color,
          width: 65,
          height: 3,
        },

        container: {
          borderTopRightRadius: 35,
          borderTopLeftRadius: 35,
          height: height || '80%',
          paddingVertical: 10,
          paddingHorizontal: 10,
        },
      }}>
      <View>
        <FlatList
          data={data}
          renderItem={renderItems}
          ListFooterComponent={() => {
            return (
              <View>
                <ChatInput width={'80%'} inputWidth={'80%'} />
              </View>
            );
          }}
          keyExtractor={(item, index) => item?.toString()}
        />
      </View>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
  },

  itemContainer: {
    paddingVertical: 15,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  itemText: {
    fontSize: size.normal,
    fontFamily: appFonts.poppinRegular,
    color: colors.g13,
  },
  titleText: {
    color: colors.theme_color,
    fontSize: size.large,
    fontFamily: appFonts.poppinRegular,
  },
  imageStyle: {
    height: 33,
    width: 33,
    resizeMode: 'contain',
  },
});
