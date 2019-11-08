import React from 'react';
import s from './Status.module.css';

class Status extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           mode: "view",
           status: this.props.status
        }
        this.editStatus = this.editStatus.bind(this);
        this.saveStatus = this.saveStatus.bind(this);
        this.cansel = this.cansel.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
    }
    editStatus(e){
        this.setState({mode:"edit"});
    }
    saveStatus(e){
        this.setState({mode:"view"});
    }
    cansel(e){
        this.setState({mode:"view"});
    }
    changeStatus(e){
        this.setState({status: e.currentTarget.value});
    }
    render(){
        let myStatus = this.props.status===null
            ? "Изменить статус"
            : this.props.status
        return (
            <div className={s.main}>
                {
                    this.props.myProfile===true
                        ? this.state.mode==="view"
                            ? <div className = {s.status} onClick = {this.editStatus}>{myStatus}</div>
                            : <div className = {s.editStatus}>
                                <input onChange = {this.changeStatus} value={this.state.status}></input>
                                <span onClick={this.saveStatus}>save</span>
                                <span onClick={this.cansel}>cansel</span>
                              </div>
                        : this.props.status
                }
            </div>
        )
    }
    
}

export default Status;