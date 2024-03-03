import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {loginAction, logoutAction, getUserAction} from '../../actions';

// initialize userToken from local storage

const initialState = {
  loading: false,
  userInfo: null,
  userName: null,
  userToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(loginAction.pending, (state, {payload}) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginAction.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.token;
      state.userName = payload?.user?.userName;
    });

    builder.addCase(loginAction.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });

    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(logoutAction.pending, (state, {payload}) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logoutAction.fulfilled, (state, {payload}) => {
      state.loading = false;
    });

    builder.addCase(logoutAction.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = state.userInfo;
    });
  },
});
export default authSlice.reducer;
