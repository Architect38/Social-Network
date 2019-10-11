import React from 'react';
import s from './Post.module.css';

function Post(){
  return (
    <div className={s.item}>
      <img src="http://zhivotnue.ru/image/domashnie_zhivotnue/sobaki/ruskii_toi_terer/2.jpg"/>
      <p>Hello world!</p>
    </div>
  );
}
export default Post;