import React from 'react';
import s from './ProfileInfo.module.css';
import * as axios from 'axios';

class ProfileInfo extends React.Component{
  componentDidMount(){
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.urlUserId==undefined?2:this.props.urlUserId}`).then(response=>{
      this.props.setProfileInfo(response.data);
      this.props.toggleIsFetching(false);
    });
  }
  render(){
    return(
      <div className={s.main}>
        <div className={s.avatar}>{this.props.isFetching==false?<img src={this.props.info==null||this.props.info.photos.large==null?"/avatar_friend.png":this.props.info.photos.large}/>:<img src="/preloader.svg"/>}</div>
        {this.props.info!=null?<div className={s.description}>
          <span>{this.props.info.fullName}</span>
        </div>:<div>нет данных</div>}
      </div>
    );
  }
}

export default ProfileInfo;
