import React from 'react';
import { render } from 'react-dom';
import Title from '../component/show/title';
import { Redirect } from 'react-router';

export default async function login() {
    const response = await fetch('http://localhost:5000/login', { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: document.getElementById('username').value, password: document.getElementById('password').value }) })
        .then(res => { return res.json() })
        .then(data => { return data })
        .catch(err => { return err });
    var template = (<Title title={response.username} />);
    // window.location = "/user";
    <Redirect to="/user"  />
    // document.getElementById('viewplate').innerHTML = response.username;
    // render(template, document.getElementById('viewplate'))
}