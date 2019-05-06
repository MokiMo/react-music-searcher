const actions = {
  MUSIC_FOUND: 'MUSIC_FOUND',
  FAVORITE_MUSIC_ADDED: 'FAVORITE_MUSIC_ADDED',
  FAVORITE_MUSIC_REMOVED: 'FAVORITE_MUSIC_REMOVED',
};

export function musicFound(payload) {
  return {
    type: actions.MUSIC_FOUND,
    payload,
  };
}

export function favoriteMusicRemoved(payload) {
  return {
    type: actions.FAVORITE_MUSIC_REMOVED,
    payload,
  };
}

export function favoriteMusicAdded(payload) {
  console.log(payload);
  return {
    type: actions.FAVORITE_MUSIC_ADDED,
    payload,
  };
}

export default actions;
