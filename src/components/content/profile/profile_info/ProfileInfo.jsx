import React from 'react';
import s from './ProfileInfo.module.css';
import Status from './status/Status';



class ProfileInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      myProfile: false,
      displayChangeAvatar: false,
      avatarIsOpen: false,
    }
    this.changeAvatar = this.changeAvatar.bind(this);
    this.openAvatar = this.openAvatar.bind(this);
  }
  componentDidMount(){
    let id;
    this.props.urlUserId==undefined?id = this.props.myId:id = this.props.urlUserId;
    this.setState({myProfile: id===this.props.myId?true:false});
    this.props.getProfile(id);
    this.props.getStatus(id);
  }
  changeAvatar(e){
    this.props.updatePhoto(e.currentTarget.files[0],this.props.myId);
  }
  openAvatar(mode){
    this.setState({avatarIsOpen:mode});
  }
  render(){
    let avatar = this.props.profileInfo==null||this.props.profileInfo.photos.large==null
      ? process.env.PUBLIC_URL +"/avatar_friend.png"
      : this.props.profileInfo.photos.large;
    return(
      <div className={s.main}>
        <div
           className={s.avatar}
           onMouseMove={()=>{this.setState({displayChangeAvatar: true})}}
           onMouseLeave={()=>{this.setState({displayChangeAvatar: false})}}
           onClick={()=>this.openAvatar(true)}
        >
            {
              this.props.isFetching===false
              ?<img src={avatar}/>
              :<img src={process.env.PUBLIC_URL +"/preloader.svg"}/>
            }
            {
              this.state.myProfile&&this.state.displayChangeAvatar
              &&<span className={s.changeAvatar} onClick={(e)=>e.stopPropagation()}>
                  <input type="file" name="file" id="file" onChange={this.changeAvatar}/>
                  <label for="file">Change avatar</label>
                </span>
            }
        </div>
        
        {
          this.props.profileInfo!=null&&
            <div className={s.description}>
              <span className={s.name}>{this.props.profileInfo.fullName}</span>
              <Status status = {this.props.status} myProfile = {this.state.myProfile} updateStatus = {this.props.updateStatus}/>
            </div>
        }
          {
            this.state.avatarIsOpen
            &&<div className={s.avatarFull} onClick={()=>this.openAvatar(false)}>
                <img src={avatar}/>
                <div></div>
              </div>
          }
      </div>
    );
  }
}

export default ProfileInfo;
