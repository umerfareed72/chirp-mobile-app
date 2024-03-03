const BASE_URL = 'http://172.29.31.251:3001/api';

const ENDPOINTS = {
  // Authentications
  REGISTER: '/users',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',

  //Self Obj
  GET_SELF_OBJ: '/self/objectives',

  //Team Obj
  GET_TEAM_OBJ: '/team/objectives',

  //Self Appraisal
  GET_SELF_APPR: '/appraisal/self',

  //Team Appraisal
  GET_TEAM_APPR: '/appraisal/team',

  //Self Objective Det
  GET_SELF_OBJ_DET: '/self/objective-details',

  //Self Appraisal Det
  GET_SELF_APPR_DET: '/appraisal/self-details',

  //Send Appraisal to employee
  SEND_TEAM_APPR: '/appraisal/send-team',

  //Accept Reject Appraisal of objective
  SEND_SELF_APPR_ACC_REJ: '/appraisal/send-self-acc-rej',
};

export {BASE_URL, ENDPOINTS};
