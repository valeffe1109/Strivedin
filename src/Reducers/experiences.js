export default function(state = {}, action) {
    switch (action.type) {
      case "EXPERIENCES_INFO":
        return {
          ...state,
              experiencesInfo:state.experiencesInfo.concat(action.payload)
          }
      default:
        return state;
    }
  }