const actions = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  NO_ERRORS: "NO_ERRORS",

  startLoading: () => ({
    type: actions.LOADING
  }),

  errorCaught: () => ({
    type: actions.ERROR
  }),

  stopLoading: () => ({
    type: actions.NO_ERRORS
  })
};
export default actions;
