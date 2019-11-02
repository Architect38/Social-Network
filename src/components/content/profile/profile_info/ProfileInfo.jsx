import React from 'react';
import s from './ProfileInfo.module.css';
import * as axios from 'axios';

class ProfileInfo extends React.Component{
  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.urlUserId==undefined?2:this.props.urlUserId}`).then(response=>{
      this.props.setProfileInfo(response.data);
    });
  }
  render(){
    return(
      <div className={s.main}>
        <img src={this.props.info==null||this.props.info.photos.large==null?"/avatar_friend.png":this.props.info.photos.large}/>
      </div>
    );
  }
}

export default ProfileInfo;
