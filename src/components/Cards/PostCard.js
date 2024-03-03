import React from 'react';
import {Dimensions} from 'react-native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  appFonts,
  appIcons,
  appImages,
  colors,
  commonstyles,
  imgList,
  size,
  spacing,
  WP,
} from '../../utilities';
import {AuthField} from '../Fields/AuthField';
import {PhotosCard} from './PhotoCard';
import PostFooter from './PostFooter';
import PostProfileCard from './PostProfileCard';

export const PostCard = ({
  onPressThreeDot,
  onPressCross,
  isVideo,
  isPhoto,
  onPressVideo,
  onPressPic,
  onPressLike,
  onPressComment,
  onPressShare,
}) => {
  const items = imgList;
  const Part1 = ({icon, h1, h2}) => {
    return (
      <PostProfileCard
        icon={icon}
        h1={h1}
        h2={h2}
        onPressCross={onPressCross}
        onPressThreeDot={onPressThreeDot}
      />
    );
  };

  const Part2 = ({desc}) => {
    return (
      <View style={styles.section2}>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    );
  };

  const Part3 = ({height, width, index, item}) => {
    console.log('itemitemitemitemitem', item?.name);
    if (index < 4) {
      return (
        <TouchableOpacity
          onPress={() => {
            console.log(item, 'itemitem');
            onPressPic(item?.name);
          }}
          style={[styles.listCon, {height: height, width: width}]}>
          <PhotosCard
            imageUri={item?.name}
            height={'100%'}
            width={'100%'}
            borderRadius={10}
          />
          {items.length > 4 && index === 3 && (
            <>
              <View style={commonstyles.bgOverlay}></View>
              <View
                style={{
                  position: 'absolute',
                }}>
                <AuthField color={colors.w1} title={`+${items.length - 4}`} />
              </View>
            </>
          )}
        </TouchableOpacity>
      );
    }
  };

  const Part4 = ({height, width}) => {
    return (
      <View
        onPress={onPressVideo}
        style={[styles.listCon, {height: height, width: width}]}>
        <PhotosCard
          isVideo={true}
          height={'100%'}
          width={'100%'}
          borderRadius={10}
          onPress={onPressVideo}
          disabled={false}
          imageUri={appImages.s1}
        />
      </View>
    );
  };

  return (
    <View>
      <Part1
        icon={appImages.profileImage}
        h1={'Victoria Malik'}
        h2={'3 hours ago'}
      />
      <Part2
        desc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem.....  See More`}
      />
      {isVideo ? (
        <View style={styles.section3}>
          <Part4 width={'100%'} height={220} />
        </View>
      ) : (
        <>
          {isPhoto ? (
            <View style={styles.section3}>
              {items?.map((item, index) => {
                return (
                  <Part3
                    item={item}
                    index={index}
                    height={
                      items.length > 3
                        ? Dimensions.get('screen').height / 7.8
                        : Dimensions.get('screen').height / 4.5
                    }
                    width={
                      items.length > 3
                        ? Dimensions.get('screen').width / 2.58
                        : Dimensions.get('window').width / 1.22
                    }
                  />
                );
              })}
            </View>
          ) : null}
        </>
      )}

      <PostFooter
        onPressLike={onPressLike}
        onPressComment={onPressComment}
        onPressShare={onPressShare}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  section2: {
    marginVertical: 10,
    padding: 5,
  },
  section3: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  listCon: {
    flexDirection: 'row',
    width: '46%',
    flexWrap: 'wrap',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  desc: {
    fontFamily: appFonts.poppinRegular,
    fontSize: size.xxtiny,
    color: colors.b1,
    lineHeight: 15,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
});
