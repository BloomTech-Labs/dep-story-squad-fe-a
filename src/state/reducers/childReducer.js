import {
  UPDATE_CHILD_INFO,
  CLEAR_CHILD_INFO,
  READING_COMPLETED,
  WRITING_COMPLETED,
  DRAWING_COMPLETED,
  UPDATE_CHILD_RECORDS,
} from '../actions';

const initialState = {
  student_id: '',
  username: '',
  records: {
    reading_count: 0,
    writing_count: 0,
    drawing_count: 0,
    days_count: 0,
  },
  settings: {
    game_mode: 'singleplayer',
    multiplayer_current_chapter: 1,
    singleplayer_current_chapter: 1,
    reading_complete: false,
    writing_complete: false,
    drawing_complete: false,
    displayDashboardWelcomeModal: true,
  },
};

export const childReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case SOME_CASE_HERE:
    //   return {
    //     ...state,
    //     addItem: true,
    //   }

    case UPDATE_CHILD_RECORDS:
      console.log('in Child reducer updateChildrecords', payload);

      return {
        ...state,
      };

    case UPDATE_CHILD_INFO:
      return {
        ...state,
        student_id: payload.student_id,
        username: payload.username,
        records: payload.records,
        // settings: {
        //   game_mode: 'singleplayer',
        //   multiplayer_current_chapter: 1,
        //   singleplayer_current_chapter: 1,
        //   reading_complete: false,
        //   writing_complete: false,
        //   drawing_complete: false,
        // },
      };

    case CLEAR_CHILD_INFO:
      return {
        ...state,
        student_id: '',
        username: '',
        records: {
          reading_count: 0,
          writing_count: 0,
          drawing_count: 0,
          days_count: 0,
        },
        settings: {
          game_mode: 'singleplayer',
          multiplayer_current_chapter: 1,
          singleplayer_current_chapter: 1,
          reading_complete: false,
          writing_complete: false,
          drawing_complete: false,
        },
      };

    case READING_COMPLETED:
      return {
        ...state,
        records: {
          ...state.records,
          reading_count: (state.records.reading_count += 1),
        },

        settings: { ...state.settings, reading_complete: true },
      };

    case WRITING_COMPLETED:
      return {
        ...state,
        records: {
          ...state.records,
          writing_count: (state.records.writing_count += 1),
        },

        settings: { ...state.settings, writing_complete: true },
      };

    case DRAWING_COMPLETED:
      return {
        ...state,
        records: {
          ...state.records,
          drawing_count: (state.records.drawing_complete += 1),
          days_count: (state.records.days_count += 1),
        },
        settings: { ...state.settings, drawing_complete: true },
      };

    default:
      return state;
  }
};
