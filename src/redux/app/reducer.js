import actions from './actions';

export const initState = {
  loading: false,
  error: false,
};

export default function musicSearchReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actions.NO_ERRORS:
      return {
        ...initState,
      };
    default:
      return state;
  }
}
