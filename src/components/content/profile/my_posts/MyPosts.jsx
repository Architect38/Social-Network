import React from 'react';
import s from './MyPosts.module.css';

let MyRef = React.createRef();

class MyPosts extends React.Component{
  constructor(props){
    super(props);
    this.addPost = this.addPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }
  addPost(e){
    if (MyRef.current.value!="") this.props.addPost(MyRef.current.value);
    e.preventDefault();
    MyRef.current.value = ""; 
  }
  deletePost(e){
    this.props.deletePost(e.currentTarget.dataset.id);
  }
  componentDidMount(){
    let id;
    this.props.urlUserId===undefined?id = this.props.myId:id = this.props.urlUserId;
    this.props.getProfile(id);
  }
  render(){
    let myProfile = this.props.urlUserId===undefined||this.props.urlUserId==this.props.myId?true:false;
    let avatar = this.props.profileInfo===null||this.props.profileInfo.photos.large===null?process.env.PUBLIC_URL+`/avatar.jpg`:this.props.profileInfo.photos.large;
    let posts = this.props.posts.map((item,i,arr)=>{
      return(
        <div key = {arr[arr.length-i-1].id} className = {s.post}>
          <div><img src={avatar} align='top'/></div>
          <div className={s.message}>
            <p>{this.props.profileInfo!=null?this.props.profileInfo.fullName:""}</p>
            <p>{arr[arr.length-i-1].post}</p>
          </div>
          <div className={s.delPost}>
            <img data-id={arr[arr.length-i-1].id} onClick={(e)=>this.deletePost(e)} src={process.env.PUBLIC_URL+`/del_post.svg`}></img>
          </div>
        </div>
      );
    });
    return (
      <div className={s.main}>
        {
          myProfile
            ?<div>
                <textarea placeholder="Write your Post!"  ref = {MyRef}></textarea>
                <a href="#" onClick={(e)=>this.addPost(e)}>Добавить запись</a>
                {posts}
             </div>
            :<div className={s.noPosts}>No posts</div>
        }
        
      </div>
    );
  }
}
export default MyPosts;
