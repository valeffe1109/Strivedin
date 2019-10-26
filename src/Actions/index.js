export const handleProfileInfo = () =>{
    return async(dispatch,getState)=>{
        var headers=new Headers({
            "Authorization": "Basic " + btoa("user9:sP4YMKhBpqQHAPJN"),
            "Content-Type": "application/json"
        });
        var response = await fetch("https://striveschool.herokuapp.com/api/profiles/me",{
        method:"GET", headers:headers
    })
    if(response.ok){
        var profileInfo = await response.json();
    
    }
    

    dispatch({
        type:"PROFILE_INFO",
        payload:profileInfo
    });
}
}



export const handleExperiencesInfo = () =>{
    return async(dispatch,getState)=>{
        var headers=new Headers({
            "Authorization": "Basic " + btoa("user9:sP4YMKhBpqQHAPJN"),
            "Content-Type": "application/json"
        });
        var response = await fetch("https://striveschool.herokuapp.com/api/profiles/user9/experiences",{
        method:"GET", headers:headers
    })
    if(response.ok){
        var experiencesInfo = await response.json();
    
    }
    

    dispatch({
        type:"EXPERIENCES_INFO",
        payload:experiencesInfo
    });
}
}




export const handlePostsInfo = () =>{
    return async(dispatch,getState)=>{
        var headers=new Headers({
            "Authorization": "Basic " + btoa("user9:sP4YMKhBpqQHAPJN"),
            "Content-Type": "application/json"
        });
        var response = await fetch("https://striveschool.herokuapp.com/api/posts",{
        method:"GET", headers:headers
    })
    if(response.ok){
        var postsInfo = await response.json();
    
    }
    

    dispatch({
        type:"POSTS_INFO",
        payload:postsInfo
    });
}
}