import React, {ChangeEvent} from "react";
import s from "./Profile.module.css"

class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false,
        status: this.props.status,
    }
    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActiveEditMode = () =>{
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps:Readonly<any>, prevState:Readonly<any>) {
        if(prevProps.status!== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div className={s.name}>
            <div> {this.props.fullName}</div>
            { !this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activeEditMode}>{this.props.status}</span>
                </div>
            }
            {
                this.state.editMode &&
                <div >
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActiveEditMode} value={this.state.status} type="text" />
                </div>
            }
               </div>;
    }
}

export default ProfileStatus