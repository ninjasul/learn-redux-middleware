import {combineReducers} from "redux";
import counter from "./counter";
import posts from "./posts";

// 여러 개의 리듀서를 한꺼번에 전달 받기 위한 방법
const rootReducer = combineReducers({ counter, posts });

export default rootReducer;