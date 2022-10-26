import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { stateInputActions } from "../store/reducers/stateSlice";

const actions = {
  ...stateInputActions,
}

export const useAppActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
