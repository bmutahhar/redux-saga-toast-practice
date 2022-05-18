export const rootReducer = (state = "init", action) => {
  switch (action.type) {
    case "TOAST_SUCCESS":
      return "TOAST_SUCCESS";
    case "TOAST_FAILURE":
      return "TOAST_FAILURE";
    default:
      return state;
  }
};
