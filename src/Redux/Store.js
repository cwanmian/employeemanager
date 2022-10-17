import {createStore,combineReducers} from "redux";
import Bugreducer from "./BugReducer";
import BodyItemReducer from "./BodyItemReducer";
import ActiveTabIdReducer from "./ActiveTabIdReducer";
import ActiveMenuIdReducer from "./ActiveMenuIdReducer";
import AddFormDrawerReducer from "./AddFormDrawerReducer";
import IsFullScreenReducer from "./IsFullScreenReducer";
import UpdateDataFileModalReducer from "./UpdateDataFileModalReducer";
export const store=createStore(combineReducers({Bugreducer,BodyItemReducer,ActiveTabIdReducer,ActiveMenuIdReducer,AddFormDrawerReducer,IsFullScreenReducer,UpdateDataFileModalReducer}))
