import React from 'react';
import s from './ProfileInfo.module.css';
import Status from './status/Status';


class ProfileInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      myProfile: false,
    }

  }
  componentDidMount(){
    let id;
    this.props.urlUserId==undefined?id = this.props.myId:id = this.props.urlUserId;
    this.setState({myProfile: id===this.props.myId?true:false});
    this.props.getProfile(id);
    this.props.getStatus(id);
  }

  render(){
    let avatar = this.props.profileInfo==null||this.props.profileInfo.photos.large==null
      ? "/avatar_friend.png"
      : this.props.profileInfo.photos.large;
    return(
      <div className={s.main}>
        <div className={s.avatar}>
            {
              this.props.isFetching===false
              ?<img src={avatar}/>
              :<img src="/preloader.svg"/>
            }
        </div>
        {
          this.props.profileInfo!=null&&
            <div className={s.description}>
              <span className={s.name}>{this.props.profileInfo.fullName}</span>
              <Status status = {this.props.status} myProfile = {this.state.myProfile}/>
            </div>
        }
      </div>
    );
  }
}

export default ProfileInfo;
