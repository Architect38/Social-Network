import React from 'react';
import s from './Profile.module.css';
import { addPost, getProfile, getStatus } from '../../../redux/profile_reducer';
import { connect } from 'react-redux';
import MyPosts from './my_posts/MyPosts';
import ProfileInfo from './profile_info/ProfileInfo';
import {withRouter} from 'react-router-dom';

function Profile(props){
  return (
    <div className={s.main}>
      <ProfileInfo 
        getStatus = {props.getStatus} status = {props.status} myId = {props.myId} isFetching = {props.isFetching} 
        profileInfo = {props.profileInfo} getProfile={props.getProfile} 
        urlUserId = {props.match.params.userid} />
      <MyPosts posts = {props.posts} addPost={props.addPost}/>
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

let urlRouterContainer = withRouter(Profile);
export default connect(mapStateToProps, {addPost, getProfile, getStatus})(urlRouterContainer); 
