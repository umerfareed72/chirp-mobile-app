import {createSlice} from '@reduxjs/toolkit';
import {
  getSelfObjAction,
  getSelfObjDetAction,
  getTeamObjAction,
  searchTObjAction,
} from '../../actions';

const initialState = {
  loading: false,
  selfObj: [],
  selfDetails: [],
  teamObj: [],
  teamObjFilter: [],
  search: '',
};

const objectiveSlice = createSlice({
  name: 'objective',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //Cases for Self Objective
    builder.addCase(getSelfObjAction.pending, (state, {payload}) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getSelfObjAction.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.selfObj = payload?.data?.items;
    });

    builder.addCase(getSelfObjAction.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });

    //Cases for Self Objective Details
    builder.addCase(getSelfObjDetAction.pending, (state, {payload}) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getSelfObjDetAction.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.selfDetails = payload?.data;
    });

    builder.addCase(getSelfObjDetAction.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });

    //Cases for Team Objective
    builder.addCase(getTeamObjAction.pending, (state, {payload}) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getTeamObjAction.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.teamObj = [...payload?.data?.items];
      state.teamObjFilter = [...payload?.data?.items];
    });

    builder.addCase(getTeamObjAction.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });

    //Search Team Obj
    builder.addCase(searchTObjAction.pending, (state, {payload}) => {
      state.opposLoading = true;
      state.error = null;
    });
    builder.addCase(searchTObjAction.fulfilled, (state, {payload}) => {
      state.search = payload;
      const newData = state?.teamObjFilter?.filter(item => {
        return item.name
          .toLowerCase()
          .trim()
          .includes(payload?.toLowerCase().trim());
      });
      state.teamObj = newData;
      state.loading = false;
    });

    builder.addCase(searchTObjAction.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });
  },
});
export default objectiveSlice.reducer;
