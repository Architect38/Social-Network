import React from 'react';
import s from './Profile.module.css';
import { addPost } from '../../../redux/profile_reducer';
import { connect } from 'react-redux';
import MyPosts from './my_posts/MyPosts';
import ProfileInfo from './profile_info/ProfileInfo';


function Profile(props){
  return (
    <div className={s.main}>
      <ProfileInfo/>
      <MyPosts posts = {props.posts} addPost={props.addPost}/>
    </div>
  );
}


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

export default connect(mapStateToProps, {addPost})(Profile); 
