import { Component } from "react";

export default class Click extends Component{
    render(){
        return(
            <input type="button" value={this.props.value} className="click" onClick={this.props.click} />
        )
    }
}