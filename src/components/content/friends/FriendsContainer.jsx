import Friends from './Friends';
import {connect} from 'react-redux';
import { followChange, setFriends, changeCurrentPage } from '../../../redux/friends_reducer';


function mapStateToProps(state){
    return { 
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage
    } 
}

const FriendsContainer = connect(mapStateToProps, {followChange, setFriends, changeCurrentPage})(Friends);
export default FriendsContainer;