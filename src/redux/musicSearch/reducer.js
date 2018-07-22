import actions from './actions';

export const initState = {
  tracks: [],
  albums: [],
  artists: [],
  favorites: [],
};

export default function musicSearchReducer(state = initState, action) {
  switch (action.type) {
    case actions.MUSIC_FOUND:
      return {
        ...state,
        tracks: action.payload.tracks,
        albums: action.payload.albums,
        artists: action.payload.artists,
      };
    // !== duplicate - add to favorites
    case actions.FAVORITE_MUSIC_ADDED:
      return state.favorites.findIndex(
        el => el.name === action.payload.name
      ) === -1
        ? {
            ...state,
            favorites: [...state.favorites, action.payload],
          }
        : { ...state };
    case actions.FAVORITE_MUSIC_REMOVED:
      return {
        ...state,
        favorites: state.favorites.filter(music => music !== action.payload),
      };
    default:
      return state;
  }
}
