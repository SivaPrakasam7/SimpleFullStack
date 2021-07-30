import { Component } from "react";

export default class Title extends Component{
    render(){
        return(
            <label className="title">{this.props.title}</label>
        )
    }
}