import React from 'react';
import s from './Profile.module.css';
import { addPost, getProfile, getStatus, updateStatus, updatePhoto } from '../../../redux/profile_reducer';
import { connect } from 'react-redux';
import MyPosts from './my_posts/MyPosts';
import ProfileInfo from './profile_info/ProfileInfo';
import {withRouter} from 'react-router-dom';
import authRedirect from '../../HOC/authRedirect';

function Profile(props){
  return (
    <div className={s.main}>
      <ProfileInfo 
        status = {props.status} 
        myId = {props.myId} 
        isFetching = {props.isFetching} 
        profileInfo = {props.profileInfo}
        urlUserId = {props.match.params.userid} 
        updateStatus = {props.updateStatus}
        getStatus = {props.getStatus} 
        getProfile={props.getProfile} 
        updatePhoto={props.updatePhoto}
      />
      <MyPosts 
        posts = {props.posts} 
        addPost={props.addPost}
        myId={props.myId}
        urlUserId = {props.match.params.userid}
        profileInfo = {props.profileInfo}
        getProfile={props.getProfile} 
      />
    </div>
  );
}


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        profileInfo: state.profilePage.profileInfo,
        myId: state.auth.dataProfile.data.id,
        isFetching: state.profilePage.isFetching,
        status: state.profilePage.status
    }
}

let urlRouterContainer = withRouter(authRedirect(Profile));
export default connect(mapStateToProps, {addPost, getProfile, getStatus, updateStatus, updatePhoto})(urlRouterContainer); 
