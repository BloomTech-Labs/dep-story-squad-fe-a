import { UPDATE_PARENT_INFO } from '../actions';

const initialState = {
  account_id: '',
  username: '',
  email: '',
  student_ids: [],
  settings: {},
  stripe: {},
};

export const parentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case SOME_CASE_HERE:
    //   return {
    //     ...state,
    //     addItem: true,
    //   }

    case UPDATE_PARENT_INFO:
      if (payload.student_ids) {
        return {
          ...state,
          account_id: payload.account_id,
          username: payload.username,
          email: payload.email,
          student_ids: payload.student_ids,
          settings: payload.settings,
          stripe: payload.stripe,
        };
      } else {
        return {
          ...state,
          account_id: payload.account_id,
          username: payload.username,
          email: payload.email,
          settings: payload.settings,
          stripe: payload.stripe,
        };
      }

    default:
      return state;
  }
};
