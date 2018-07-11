const actions = {
  MUSIC_FOUND: "MUSIC_FOUND",
  FAVORITE_MUSIC_ADDED: "FAVORITE_MUSIC_ADDED",
  FAVORITE_MUSIC_REMOVED: "FAVORITE_MUSIC_REMOVED",

  musicFound: payload => ({
    type: actions.MUSIC_FOUND,
    payload: payload
  }),
  favoriteMusicAdded: name => ({
    type: actions.FAVORITE_MUSIC_ADDED,
    name: name
  }),
  favoriteMusicRemoved: name => ({
    type: actions.FAVORITE_MUSIC_REMOVED,
    name: name
  })
};
export default actions;
