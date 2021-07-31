import { render } from 'react-dom';
import React from 'react';
import Title from '../component/show/title';

export default async function login() {
    const response = await fetch('http://localhost:5000/login', { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: document.getElementById('username').value, password: document.getElementById('password').value }) })
        .then(res => { return res.json() })
        .then(data => { return data })
        .catch(err => { return err });
    // window.location = "/user";
    render(<Title title={response.username} />, document.getElementById("root"))
}