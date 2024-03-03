import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {colors, WP} from '../../utilities';

import Icon from 'react-native-vector-icons/FontAwesome';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

export const MapCard = ({
  showMap,
  onPressRemove,
  coordinates,
  onMapReady,
  mapRef,
}) => {
  return (
    <View style={styles.mapContainer}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: coordinates?.latitude,
          longitude: coordinates?.longitude,
          latitudeDelta: coordinates?.latitudeDelta,
          longitudeDelta: coordinates?.longitudeDelta,
        }}
        maxZoomLevel={12}>
        <Marker coordinate={coordinates} />
      </MapView>
      <TouchableOpacity
        onPress={() => {
          onPressRemove();
        }}
        style={styles.crossIcon}>
        <Icon
          name={'close'}
          size={12}
          color={colors.g7}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    height: WP('45'),
    width: '95%',
    marginTop: 20,
    borderRadius: 10,
    alignSelf: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
  crossIcon: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: colors.red2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -7,
    top: -10,
  },
  icon: {fontSize: 20, color: 'white'},
});
