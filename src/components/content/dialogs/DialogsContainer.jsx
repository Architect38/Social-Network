import Dialogs from './Dialogs';
import { addMessageActionCreator } from '../../../redux/dialogs_reducer';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return { 
        messages: state.dialogsPage.messages,
        users: state.dialogsPage.users
    } 
}

function mapDispatchToProps(dispatch){
    return {
        addMessage(message){
            dispatch(addMessageActionCreator(message));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;