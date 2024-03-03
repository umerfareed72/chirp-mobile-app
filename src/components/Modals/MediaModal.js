import React from 'react';
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {appIcons, appImages, colors, WP} from '../../utilities';
import PostProfileCard from '../Cards/PostProfileCard';
import {AppHeader} from '../Headers/AppHeader';
import {SearchInput} from '../Inputs/SearchInput';

export const MediaModal = ({show, onPressHide, title, onPress}) => {
  const MediaCard = ({onPressCard, value}) => {
    return (
      <TouchableOpacity style={styles.itemCon} onPress={onPressCard}>
        <View style={{width: '70%'}}>
          <PostProfileCard icon={appImages.n1} h1={'Agency'} h2={'Dj Fluke'} />
        </View>
        <View style={styles.btnCon}>
          <Image source={appIcons.play} style={styles.iconStyle} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Modal
      coverScreen={true}
      backdropColor={colors.w1}
      backdropOpacity={1}
      onRequestClose={onPressHide}
      visible={show}>
      <AppHeader
        onPressBack={onPressHide}
        title={title}
        rightButtonText={'Create'}
      />

      <View style={styles.container}>
        <SearchInput />
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={({item, index}) => <MediaCard onPressCard={onPress} />}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: WP('4'),
  },
  itemCon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  iconStyle: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    tintColor: colors.b1,
  },
  btnCon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.g7,
    height: 40,
    width: 40,
    borderRadius: 100,
  },
});
