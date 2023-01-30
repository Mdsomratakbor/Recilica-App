import { LoadingState } from './../state/loading-state';
import {createReducer, on} from "@ngrx/store"
import { hide, show } from "../actions/loading-action";

const initialState: LoadingState = {
  show: false
}
const reducer = createReducer(
  initialState,
 on(show, () => {
  return { show: true};
}), on(hide, ()=>{
  return {show: false};
}));

export function loadingReducer(state:LoadingState, action){
return reducer(state, action)
}
