import actions from './actions';
import { authenticated } from '../../config';

export const initState = {
  user: '',
  pass: '',
  authenticated,
  loading: false,
};

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case actions.AUTH:
      return {
        ...state,
        loading: true,
      };
    case actions.AUTH_SUCCESS:
      return {
        ...state,
        ...action.payload,
        authenticated: true,
        loading: false,
      };
    case actions.AUTH_FAIL:
      return {
        ...state,
        authenticated: false,
        loading: 'error',
      };
    case actions.LOGOUT:
      return {
        ...state,
        authenticated: false,
      };
    default:
      return state;
  }
}
