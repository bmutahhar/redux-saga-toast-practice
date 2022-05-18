export const showToast = (message, type, duration) => {
  return { type: "SHOW_TOAST", payload: { message, type, duration } };
};
