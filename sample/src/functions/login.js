// import { render } from 'react-dom';

export default async function login() {
    const response = await fetch('http://localhost:5000/login', { method: "POST", body: JSON.stringify({ username: document.getElementById('username').value, password: document.getElementById('password').value }) })
        .then(res => { return res.json() })
        .then(data => { return data })
        .catch(err => { return err });
    console.log(JSON.stringify(response));
    alert(JSON.stringify(response));
    // window.location = "/user";
    // document.getElementById('user').innerHTML = response.username;
}