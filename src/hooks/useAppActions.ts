import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { todoActions } from "../store/reducers/todoSlice";
import { stateInputActions } from "../store/reducers/stateSlice";

const actions = {
  ...stateInputActions,
  ...todoActions,
}

export const useAppActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
