export default function(state = {}, action) {
    switch (action.type) {
      case "PROFILE_INFO":
        return {
          ...state,
         profileInfo:{
           ...state.profileInfo,
           name:action.payload.name,
           surname:action.payload.surname,
           email:action.payload.email,
           bio:action.payload.bio,
           title:action.payload.title,
           area:action.payload.area,
           image:action.payload.image,
           username:action.payload.username,
          }
        }
      default:
        return state;
    }
  }