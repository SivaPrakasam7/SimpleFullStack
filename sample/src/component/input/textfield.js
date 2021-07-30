import { Component } from "react";

export default class Textfield extends Component {
    render() {
        return (
            <table>
                <tbody><tr><td width="20"><img src={this.props.src} className="icon"/></td><td width="80"><input id={this.props.name} className="textbox" type={this.props.type} placeholder={this.props.txt} /></td></tr></tbody>
            </table>
        )
    }
}