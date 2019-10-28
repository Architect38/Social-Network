import MyPosts from './MyPosts';
import { addPostActionCreator, changePostActionCreator } from './../../../../redux/profile_reducer';
import { connect } from 'react-redux';




// function MyPostsContainer(props){
    
//     function addPost(post){
//         let action = addPostActionCreator(post);
//         props.store.dispatch(action);
//     }
//     function changePost(){
        
//         let action = changePostActionCreator();
//         props.store.dispatch(action);
//     }

//     return(
//         <MyPosts posts = {props.store.getState().profilePage.posts} addPost = {addPost} changePost={changePost}/>
//     );
// }


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost(post){
            let action = addPostActionCreator(post);
            dispatch(action);
        },
        changePost(){
            let action = changePostActionCreator();
            dispatch(action);
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts); 

export default MyPostsContainer; //<MyPosts posts = {props.store.getState().profilePage.posts} addPost = {addPost} changePost={changePost}/>