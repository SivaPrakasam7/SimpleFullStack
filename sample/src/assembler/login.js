import { Component } from "react";
import Textfield from "../component/input/textfield";
import Click from "../component/intract/click";
import Title from "../component/show/title";
import login from "../functions/login";

export default class Login extends Component {
    render() {
        return (
            <form method="POST" className="center login">
                <Title title="SignIn"/>
                <Textfield name="username" type="text" src="https://img.icons8.com/color/50/000000/user.png" txt="username" />
                <Textfield name="password" type="password" src="https://img.icons8.com/color/50/000000/password.png" txt="password" />
                <Click value="Sign In" click={login} />
                {/* <div id="viewplate">ok</div> */}
            </form>
        )
    }
}