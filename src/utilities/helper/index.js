import NetInfo from '@react-native-community/netinfo';
import {Alert, PermissionsAndroid, Platform, Share} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Geocoder from 'react-native-geocoder';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

const checkConnected = () => {
  return NetInfo.fetch().then(state => {
    return state.isConnected;
  });
};
const capitalizeFirstLetter = string => {
  return string?.charAt(0).toUpperCase() + string?.slice(1).toLowerCase();
};
const responseValidator = response => {
  Alert.alert('Error', response?.message || 'Internal Server Error');
};

export const openDeviceCamra = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Allow Camera Permission',
        message: 'Allow Camera to Select Image Via Camera',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const res = await ImagePicker.openCamera({
        compressImageMaxWidth: 300,
        compressImageMaxHeight: 300,
        compressImageQuality: 0.7,
      });
      return res;
    } else {
    }
  } catch (E) {}
};

export const openDeviceGallery = async (multiple = false) => {
  try {
    if (Platform.OS == 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Allow Gallery Permission',
          message: 'Allow App to access photos',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const res = await ImagePicker.openPicker({
          width: 300,
          height: 300,
          compressImageQuality: 0.7,
          multiple: multiple,
          mediaType: 'any',
        });
        return res;
      } else {
      }
    } else {
      const res = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        compressImageQuality: 0.7,
        mediaType: 'any',
        multiple: multiple,
      });
      return res;
    }
  } catch (E) {
    console.log(E);
  }
};

export const openDeviceVideo = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Allow Camera Permission',
        message: 'Allow Camera to Select Image Via Camera',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const res = await ImagePicker.openCamera({
        width: 300,
        height: 300,
        compressImageQuality: 0.7,
        mediaType: 'video',
      });
      return res;
    } else {
    }
  } catch (E) {}
};
export function isNullOrWhitespace(input) {
  if (typeof input === 'undefined' || input == null) return true;

  return input.toString().replace(/\s/g, '').length < 1;
}
export const onPressShare = async (title, message) => {
  const result = await Share.share({
    title: title || 'Chrip',
    message: message || `Share Post Now`,
  });
  return result;
};
const convertLatLong = async address => {
  if (address) {
    const res = await Geocoder?.geocodeAddress(address);
    return res;
  }
  // res is an Array of geocoding object (see below)
};

const PLATEFORM_LOCATION_PERMISSIONS = {
  ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
};
const REQUEST_PERMISSION_TYPE = {
  location: PLATEFORM_LOCATION_PERMISSIONS,
};
const PERMISSION_TYPE = {
  location: 'location',
};

const requestPermission = async permissions => {
  try {
    var result = await request(permissions);

    switch (result) {
      case RESULTS.GRANTED:
        return true;
      case RESULTS.UNAVAILABLE:
        return false;
      case RESULTS.DENIED:
        return false;
      case RESULTS.LIMITED:
        return false;
      case RESULTS.BLOCKED:
        return false;
      default:
        return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const checkPermission = async (type, permissionRequested = false) => {
  const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS];
  if (!permissions) {
    return true;
  }
  try {
    var result = await check(permissions);
    if (result == RESULTS.GRANTED) {
      return true;
    } else {
      if (permissionRequested) {
        return await requestPermission(permissions);
      }
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};
export {
  checkConnected,
  responseValidator,
  capitalizeFirstLetter,
  convertLatLong,
};
