import Friends from './Friends';
import { followChangeActionCreator } from './../../../redux/friends_reducer';
import {connect} from 'react-redux';


function mapStateToProps(state){
    return { 
        friends: state.friendsPage.friends,
    } 
}

function mapDispatchToProps(dispatch){
    return {
        follow(e){
            dispatch(followChangeActionCreator(e.currentTarget.dataset.id));
            e.preventDefault();
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;