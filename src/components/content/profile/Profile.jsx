import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './my_posts/MyPostsContainer';
import ProfileInfo from './profile_info/ProfileInfo';

function Profile(props){
  return (
    <div className={s.main}>
      <ProfileInfo/>
      <MyPostsContainer/>
    </div>
  );
}
export default Profile;
