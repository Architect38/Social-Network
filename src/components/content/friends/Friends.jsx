import React from 'react';
import s from './Friends.module.css'
import {connect} from 'react-redux';
import { follow, getUsers, changeCurrentPage } from '../../../redux/friends_reducer';
import {NavLink} from 'react-router-dom';
import ReactPaginate from 'react-paginate';

class Friends extends React.Component{
    constructor(props){
        super(props); 
        this.followChange = this.followChange.bind(this);
        this.changeCurrentPage = this.changeCurrentPage.bind(this);
    }
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    changeCurrentPage(e){
         this.props.changeCurrentPage(e.selected+1);
         
    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps.currentPage!=this.props.currentPage) this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    followChange(e){
        let id = e.currentTarget.dataset.id; //id пользователя
        let status = e.currentTarget.text; //follow/unfollow
        this.props.follow(id, status);
        e.preventDefault();
    }
    render(){
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
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
            <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pagesCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.changeCurrentPage}
                    containerClassName={s.pages}
                    pageClassName={s.page}
                    previousClassName={s.previous}
                    nextClassName={s.next}
                    activeClassName={s.activePage}
                 />
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

export default connect(mapStateToProps, {getUsers, follow, changeCurrentPage})(Friends);