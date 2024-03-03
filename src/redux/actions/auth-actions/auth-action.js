import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {loginApi, logoutApi} from '../../../service';
import {initialConfig, responseValidator} from '../../../utilities';
import * as Types from '../../types';
// userActions.js
export const loginAction = createAsyncThunk(
  Types.AUTH_LOGIN,
  async ({values, onSuccess, onFailure}, {rejectWithValue}) => {
    try {
      const requestBody = {
        device_id: values.data.device_id,
        username: values.data.username,
        password: values?.data?.password,
      };
      const res = await loginApi(requestBody);
      if (res) {
        await AsyncStorage.setItem(
          'usertoken',
          JSON.stringify(res?.data?.token),
        );

        // await AsyncStorage.setItem('user', JSON.stringify(res?.data));
        onSuccess(res?.data);
      }
      return res?.data;
    } catch (error) {
      responseValidator(error?.response?.data);
      onFailure(error?.response?.data);
      if (error.response && error?.response?.data?.message) {
        return rejectWithValue(error?.response?.data?.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

//Logout
export const logoutAction = createAsyncThunk(
  Types.AUTH_LOGOUT,
  async ({onSuccess, onFailure}, {rejectWithValue}) => {
    try {
      const res = await logoutApi();
      if (res) {
        onSuccess(res?.data);
      }
      return res?.data;
    } catch (error) {
      responseValidator(error?.response?.data);
      onFailure(error?.response?.data);
      if (error.response && error?.response?.data?.message) {
        return rejectWithValue(error?.response?.data?.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
