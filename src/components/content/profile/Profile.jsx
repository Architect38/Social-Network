import React from 'react';
import s from './Profile.module.css';
import { addPost, setProfileInfo } from '../../../redux/profile_reducer';
import { connect } from 'react-redux';
import MyPosts from './my_posts/MyPosts';
import ProfileInfo from './profile_info/ProfileInfo';
import {withRouter} from 'react-router-dom';

function Profile(props){
  return (
    <div className={s.main}>
      <ProfileInfo info = {props.info} setProfileInfo={props.setProfileInfo} urlUserId = {props.match.params.userid} />
      <MyPosts posts = {props.posts} addPost={props.addPost}/>
    </div>
  );
}


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        info: state.profilePage.info
    }
}

let urlRouterContainer = withRouter(Profile);
export default connect(mapStateToProps, {addPost, setProfileInfo})(urlRouterContainer); 
