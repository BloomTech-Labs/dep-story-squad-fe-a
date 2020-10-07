const initialState = {
  student_id: '12345678',
  username: '',
  records: {},
  settings: {
    game_mode: 'singleplayer',
    multiplayer_current_chapter: 1,
    singleplayer_current_chapter: 1,
    reading_complete: false,
    writing_complete: false,
    drawing_complete: false,
  },
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
