import React from 'react';
import s from './Friends.module.css'
import * as axios from 'axios';
import {connect} from 'react-redux';
import { followChange, setFriends, changeCurrentPage, toggleIsFetching } from '../../../redux/friends_reducer';
import {NavLink} from 'react-router-dom';

class Friends extends React.Component{
    constructor(props){
        super(props); 
        this.changeCurrentPage = this.changeCurrentPage.bind(this);
        
    }
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{
            this.props.setFriends(response.data.items);
        });
    }
    changeCurrentPage(e){
        this.props.changeCurrentPage(e.currentTarget.dataset.page);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{
            this.props.setFriends(response.data.items);
            this.props.toggleIsFetching(false);
        });
    }
    render(){
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        let pages = [];
        for (let i=1;i<=pagesCount;i++){
            pages.push(i);
        }
        debugger;
        return(
            <div className ={s.main}>
            {this.props.isFetching==true?<img src='preloader.svg'/>:<div>
                {this.props.friends.map((item)=>{
                    return (
                        <div key={item.id} className = {s.friend}>
                            <NavLink to={`/profile/${item.id}`}>
                                <img src={item.photos.small==null?'/avatar_friend.png':item.photos.small} align="top"/>
                            </NavLink>
                            <p>{item.name}<br/><br/>
                            <a href="#" className={`${s.btnFollow} ${item.followed ? s.follow : s.unfollow}`} data-id={item.id} onClick={(e)=>{this.props.followChange(e.currentTarget.dataset.id);e.preventDefault();}}>{item.followed ? "follow" : "unfollow"}</a>
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
        isFetching: state.friendsPage.isFetching
    } 
}

export default connect(mapStateToProps, {followChange, setFriends, changeCurrentPage, toggleIsFetching})(Friends);