import React from 'react';
import s from './Friends.module.css'
import {connect} from 'react-redux';
import { followChange, setFriends, changeCurrentPage, toggleIsFetching, toggleIsFollowFetching } from '../../../redux/friends_reducer';
import {NavLink} from 'react-router-dom';
import { usersAPI } from '../../../api/api';

class Friends extends React.Component{
    constructor(props){
        super(props); 
        this.changeCurrentPage = this.changeCurrentPage.bind(this);
        this.followChange = this.followChange.bind(this);
        
    }
    componentDidMount(){
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data=>{
            this.props.setFriends(data.items);
            this.props.toggleIsFetching(false);
        });
    }
    changeCurrentPage(e){
        this.props.changeCurrentPage(e.currentTarget.dataset.page);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data=>{
            this.props.setFriends(data.items);
            this.props.toggleIsFetching(false);
        });
        
    }
    followChange(e){
        let id = e.currentTarget.dataset.id; //id пользователя
        this.props.toggleIsFollowFetching(id); //включаем preloader
        if (e.currentTarget.text=="unfollow") usersAPI.follow(id).then(response=>{
            this.props.toggleIsFollowFetching(id); //выключаем preloader
            if (response.data.resultCode==0) this.props.followChange(id); //если ответ сервера положительный, меняем состояние
        });
        if (e.currentTarget.text=="follow") usersAPI.unfollow(id).then(response=>{
            this.props.toggleIsFollowFetching(id);
            if (response.data.resultCode==0) this.props.followChange(id);
        });
        e.preventDefault();
    }
    render(){
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        let pages = [];
        for (let i=1;i<=pagesCount;i++){
            pages.push(i);
        }
        return(
            <div className ={s.main}>
            {this.props.isFetching==true?<img src='/preloader.svg'/>:<div>
                {this.props.friends.map((item)=>{
                    return (
                        <div key={item.id} className = {s.friend}>
                            <NavLink to={`/profile/${item.id}`}>
                                <img className = {s.avatar} src={item.photos.small==null?'/avatar_friend.png':item.photos.small} align="top"/>
                            </NavLink>
                            <p>{item.name}<br/><br/>
                            {this.props.isFollowFetching.some(r=>{return r==item.id})==false?<a href="#" className={`${s.btnFollow} ${item.followed ? s.follow : s.unfollow}`} data-id={item.id} onClick={this.followChange}>
                                {item.followed ? "follow" : "unfollow"}
                            </a>:<img className = {s.followPreloader} src="/preloader.svg"/>}
                            
                            </p>
                        </div> 
                    );
                })}
            </div>}
            <div className = {s.pages}>
                {pages.map(item=>{
                    return (
                        <span data-page={item} className ={this.props.currentPage==item && s.currentPage} onClick={this.changeCurrentPage}>{item}</span>
                    )
                })}
            </div>
            </div>
        );  
    }
}

function mapStateToProps(state){
    return { 
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching,
        isFollowFetching: state.friendsPage.isFollowFetching
    } 
}

export default connect(mapStateToProps, {followChange, setFriends, changeCurrentPage, toggleIsFetching, toggleIsFollowFetching})(Friends);