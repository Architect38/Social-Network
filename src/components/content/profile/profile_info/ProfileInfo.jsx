import React from 'react';
import s from './ProfileInfo.module.css';

function ProfileInfo(props){
  return(
    <div className={s.main}>
      <img src="avatar.jpg"/>
    </div>
  );
}

export default ProfileInfo;
