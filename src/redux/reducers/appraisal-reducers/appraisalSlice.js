import {createSlice} from '@reduxjs/toolkit';
import {
  getSelfApprAction,
  getSelfApprDetAction,
  getTeamApprAction,
  searchTApprAction,
  sendSelfApprAccRejAction,
  sendTeamApprAction,
} from '../../actions';

const initialState = {
  loading: false,
  selfAppr: [],
  selfApprDetails: [],
  teamAppr: [],
  teamApprFilter: [],
  search: '',
};

const appraisalSlice = createSlice({
  name: 'appraisal',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //Cases for Self Eval
    builder.addCase(getSelfApprAction.pending, (state, {payload}) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getSelfApprAction.fulfilled, (state, {payload}) => {
      state.loading = false;

      state.selfAppr = payload?.data?.items;
    });

    builder.addCase(getSelfApprAction.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });

    //Cases for Self Eval Det
    builder.addCase(getSelfApprDetAction.pending, (state, {payload}) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getSelfApprDetAction.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.selfApprDetails = payload?.data;
    });

    builder.addCase(getSelfApprDetAction.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });

    //Cases for Team Eval
    builder.addCase(getTeamApprAction.pending, (state, {payload}) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getTeamApprAction.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.teamAppr = [...payload?.data?.items];
      state.teamApprFilter = [...payload?.data?.items];
    });

    builder.addCase(getTeamApprAction.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });

    //Cases for Sending Team Eval
    builder.addCase(sendTeamApprAction.pending, (state, {payload}) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(sendTeamApprAction.fulfilled, (state, {payload}) => {
      state.loading = false;
    });

    builder.addCase(sendTeamApprAction.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });

    //Cases for Sending Self Accepted Rej Eval
    builder.addCase(sendSelfApprAccRejAction.pending, (state, {payload}) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(sendSelfApprAccRejAction.fulfilled, (state, {payload}) => {
      state.loading = false;
    });

    builder.addCase(sendSelfApprAccRejAction.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });

    //Search Team Eval
    builder.addCase(searchTApprAction.pending, (state, {payload}) => {
      state.opposLoading = true;
      state.error = null;
    });
    builder.addCase(searchTApprAction.fulfilled, (state, {payload}) => {
      state.search = payload;
      const newData = state?.teamApprFilter?.filter(item => {
        return item.empName
          .toLowerCase()
          .trim()
          .includes(payload?.toLowerCase().trim());
      });
      state.teamAppr = newData;
      state.loading = false;
    });

    builder.addCase(searchTApprAction.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });
  },
});
export default appraisalSlice.reducer;
