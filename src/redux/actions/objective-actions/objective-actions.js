import {createAsyncThunk} from '@reduxjs/toolkit';
import {getSelfObj, getSelfObjDet, getTeamObj} from '../../../service';
import {responseValidator} from '../../../utilities';
import * as Types from '../../types';

// Self Obj Action
export const getSelfObjAction = createAsyncThunk(
  Types.GET_SELF_OBJ,
  async ({values, onSuccess, onFailure}, {rejectWithValue}) => {
    try {
      const res = await getSelfObj(values);
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

// Team Obj Action
export const getTeamObjAction = createAsyncThunk(
  Types.GET_TEAM_OBJ,
  async ({values, onSuccess, onFailure}, {rejectWithValue}) => {
    try {
      const res = await getTeamObj(values);
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

export const searchTObjAction = createAsyncThunk(
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

// Self Obj Det Action
export const getSelfObjDetAction = createAsyncThunk(
  Types.GET_SELF_OBJ_DET,
  async ({values, onSuccess, onFailure}, {rejectWithValue}) => {
    try {
      const res = await getSelfObjDet(values);
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
