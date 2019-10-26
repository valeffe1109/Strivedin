import { createStore,  compose, applyMiddleware,combineReducers } from "redux";
import profileReducer from "../Reducers/index.js";
import postsReducer from '../Reducers/posts.js'
import experiencesReducer from '../Reducers/experiences.js'
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {

  profile: {
    profileInfo: {}
  },
  experiences:
  {
    experiencesInfo:[]
  },
  posts:
  {
    postsInfo:[]
  }


};

const combReducer = combineReducers({ profile: profileReducer, experiences:experiencesReducer , posts:postsReducer});


export default function configureStore(){
  return createStore(combReducer,initialState,
      composeEnhancers(applyMiddleware(thunk)))
}


