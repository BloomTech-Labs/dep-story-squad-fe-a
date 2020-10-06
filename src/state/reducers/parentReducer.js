const initialState = {
  account_id: '',
  username: '',
  student_ids: [],
  settings: {},
};

export const parentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case SOME_CASE_HERE:
    //   return {
    //     ...state,
    //     addItem: true,
    //   }

    default:
      return state;
  }
};
