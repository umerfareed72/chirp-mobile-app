import React from 'react';
import {FlatList, Text, TouchableOpacity, Alert} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {appFonts, appImages, colors, size, spacing} from '../../../utilities';
import {InvitationCard} from '../../Cards/InvitationCard';
import {ScreenHeader} from '../../Headers/ScreenHeader';

export const GroupSec1 = ({title}) => {
  return (
    <View style={styles.container}>
      <ScreenHeader title={title}></ScreenHeader>
      <FlatList
        data={[
          {icon: null},
          {icon: appImages.n1},
          {icon: appImages.n1},
          {icon: appImages.n1},
        ]}
        renderItem={({item}) => {
          return (
            <View style={spacing.mx2}>
              <InvitationCard
                onPressInvite={() => {
                  Alert.alert('Coming Soon');
                }}
              />
            </View>
          );
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(item, index) => item?.toString()}
      />
      <TouchableOpacity style={styles.botTextCon}>
        <Text style={styles.bottomText}>View All </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    // height: 280,
    backgroundColor: colors.w1,
    alignSelf: 'center',
    padding: 10,
    width: '100%',
    borderRadius: 10,
  },
  contentContainer: {
    flexDirection: 'row',
  },

  bottomText: {
    fontFamily: appFonts.poppinMedium,
    fontSize: size.xxtiny,
    color: colors.g5,
  },

  botTextCon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
