import { call, put, takeEvery } from "redux-saga/effects";
import toast from "react-hot-toast";

function* showToast(action) {
  const type = action.payload?.type || "success";
  const duration = action.payload?.duration || 4000;
  const message = action.payload?.message;
  if (type.toLowerCase() === "success") {
    yield toast.success(message, {
      duration: duration,
    });
  }
  if (type.toLowerCase() === "error") {
    yield toast.error(message, {
      duration: duration,
    });
  }
}

function* mySaga() {
  yield takeEvery("SHOW_TOAST", showToast);
}

export default mySaga;
