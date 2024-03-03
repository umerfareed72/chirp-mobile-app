import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  getSelfAppr,
  getSelfApprDet,
  getTeamAppr,
  sendSelfApprAccRej,
  sendTeamAppr,
} from '../../../service';
import {responseValidator} from '../../../utilities';
import * as Types from '../../types';

// Self Appr Action
export const getSelfApprAction = createAsyncThunk(
  Types.GET_SELF_APPR,
  async ({values, onSuccess, onFailure}, {rejectWithValue}) => {
    try {
      const res = await getSelfAppr(values);
      onSuccess(res?.data?.data);
      return {
        data: res?.data?.data,
      };
    } catch (error) {
      console.log('ERR::', error);
      responseValidator(error?.response?.data);
      onFailure(error?.response?.data);
      // return custom error message from API if any

      if (error.response && error?.response?.data?.message) {
        return rejectWithValue(error?.response?.data?.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

// Self Appr Details Action
export const getSelfApprDetAction = createAsyncThunk(
  Types.GET_SELF_APPR_DET,
  async ({values, onSuccess, onFailure}, {rejectWithValue}) => {
    try {
      const res = await getSelfApprDet(values);
      onSuccess(res?.data?.data);
      return {
        data: res?.data?.data,
      };
    } catch (error) {
      console.log('ERR::', error);
      responseValidator(error?.response?.data);
      onFailure(error?.response?.data);
      // return custom error message from API if any

      if (error.response && error?.response?.data?.message) {
        return rejectWithValue(error?.response?.data?.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

// Team Appr Action
export const getTeamApprAction = createAsyncThunk(
  Types.GET_TEAM_APPR,
  async ({values, onSuccess, onFailure}, {rejectWithValue}) => {
    try {
      const res = await getTeamAppr(values);
      onSuccess(res?.data?.data);
      return {
        data: res?.data?.data,
      };
    } catch (error) {
      console.log('ERR::', error);
      responseValidator(error?.response?.data);
      onFailure(error?.response?.data);
      // return custom error message from API if any

      if (error.response && error?.response?.data?.message) {
        return rejectWithValue(error?.response?.data?.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

//Send Team Appr Action
export const sendTeamApprAction = createAsyncThunk(
  Types.SEND_TEAM_APPR,
  async ({values, onSuccess, onFailure}, {rejectWithValue}) => {
    try {
      const res = await sendTeamAppr(values);
      onSuccess(res?.data);
      return {
        data: res?.data,
      };
    } catch (error) {
      console.log('ERR::', error);
      responseValidator(error?.response?.data);
      onFailure(error?.response?.data);
      // return custom error message from API if any

      if (error.response && error?.response?.data?.message) {
        return rejectWithValue(error?.response?.data?.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

//Send Self Appr Action Accepted Rejected
export const sendSelfApprAccRejAction = createAsyncThunk(
  Types.SEND_SELF_APPR_ACC_REJ,
  async ({values, onSuccess, onFailure}, {rejectWithValue}) => {
    try {
      const res = await sendSelfApprAccRej(values);
      onSuccess(res?.data);
      return {
        data: res?.data,
      };
    } catch (error) {
      console.log('ERR::', error);
      responseValidator(error?.response?.data);
      onFailure(error?.response?.data);
      // return custom error message from API if any

      if (error.response && error?.response?.data?.message) {
        return rejectWithValue(error?.response?.data?.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const searchTApprAction = createAsyncThunk(
  Types.SEARCH_TEAM_OBJ,
  async (values, {rejectWithValue}) => {
    try {
      return values;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
