import actions from "./actions";

export const initState = {
	tracks: [],
	favorites: []
};

export default function musicSearchReducer(state = initState, action) {
	switch (action.type) {
		case actions.MUSIC_FOUND:
			return {
				...state,
				tracks: action.payload.tracks
			};
		case actions.FAVORITE_MUSIC_ADDED:
			return {
				...state,
				favorites: [...state.favorites, action.name]
			};
		case actions.FAVORITE_MUSIC_REMOVED:
			return {
				...state,
				favorites: state.favorites.filter(
					music => music !== action.name
				)
			};
		default:
			return state;
	}
}
