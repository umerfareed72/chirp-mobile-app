import {combineReducers} from 'redux';
import authReducer from './auth-reducers/authSlice';
import objectiveReducer from './objective-reducers/objectiveSlice';
import appraisalReducer from './appraisal-reducers/appraisalSlice';

const root_reducer = combineReducers({
  /* your app’s top-level reducers */
  auth: authReducer,
  objective: objectiveReducer,
  appraisal: appraisalReducer,
});

const rootReducer = (state, action) => {
  if (action?.type == 'auth/logout/fulfilled') {
    state = undefined;
  }
  return root_reducer(state, action);
};

export default rootReducer;
