const actions = {
  AUTH: "AUTH",
  AUTH_SUCCESS: "AUTH_SUCCESS",
  AUTH_FAIL: "AUTH_FAIL",
  LOGOUT: "LOGOUT",

  auth: payload => ({
    type: actions.AUTH,
    payload: payload
  }),

  logout: () => ({
    type: actions.LOGOUT
  })
};
export default actions;
