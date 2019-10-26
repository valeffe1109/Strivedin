import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader'
import ProfileBody from './ProfileBody'

class Profile extends Component {
    state = {  }
    render() { 
        return ( 
           <>
          
           <ProfileHeader/>
           <ProfileBody/>
           </>
         );
    }
}
 
export default Profile;