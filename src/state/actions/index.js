// import all of your actions into this file, and export them back out.
// This allows for the simplification of flow when importing actions into your components throughout your app.
// Actions should be focused to a single purpose.
// You can have multiple action creators per file if it makes sense to the purpose those action creators are serving.
// Declare action TYPES at the top of the file

import { axiosWithAuth } from '../../api';
// import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
// const { authState } = useOktaAuth();

export const UPDATE_PARENT_INFO = 'UPDATE_PARENT_INFO';
export const updateParentInfo = authState => {
  // return { type:UPDATE_PARENT_INFO, payload: data }
  return dispatch => {
    // dispatch({type: UPDATE_PARENT_INFO, payload: data})
    axiosWithAuth('web', authState)
      .get('/api/account/login')
      .then(res => {
        console.log('Web Backend Login Res', res.data[0]);
        dispatch({ type: UPDATE_PARENT_INFO, payload: res.data[0] });
      })
      .catch(err => console.log('Web Backend Login Error:', err));
  };
};
