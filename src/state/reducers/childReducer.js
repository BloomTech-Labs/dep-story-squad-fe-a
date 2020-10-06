const initialState = {
  student_id: '',
  username: '',
  records: {},
  settings: {},
};

export const childReducer = (state = initialState, { type, payload }) => {
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
