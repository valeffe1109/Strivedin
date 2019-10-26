export default function(state = {}, action) {
    switch (action.type) {
      case "POSTS_INFO":
        return {
          ...state,
              postsInfo:state.postsInfo.concat(action.payload)
          }
      default:
        return state;
    }
  }