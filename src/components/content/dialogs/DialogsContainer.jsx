import Dialogs from './Dialogs';
import { addMessage } from '../../../redux/dialogs_reducer';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return { 
        messages: state.dialogsPage.messages,
        users: state.dialogsPage.users
    } 
}


const DialogsContainer = connect(mapStateToProps, {addMessage})(Dialogs);
export default DialogsContainer;