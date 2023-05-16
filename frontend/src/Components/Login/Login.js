import React, { useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';

import './Login.css';

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
      e.preventDefault();
      const user = {
        name: name,
        password: password
      };
  
      // Make an API call to the server to check the login credentials
      axios.post('http://localhost:8090/user/login', user)
        .then(response => {
          console.log(response.data);
          window.location.href = '/animal';
        })
        .catch(error => {
          console.log(error); 
          alert(error);
        });
    };
  
    return (
      <div>
        <div className='Login_container'>
        <Grid container>
        <Grid xs={3}></Grid>
        <Grid xs={6}>
        <div className='Login_heading'>
        <h2>Login</h2>
        </div>
        <div className='Login_form'>
        <form onSubmit={handleLogin}>
          <div className='Login_form_content'>
            <label>Name:</label><br/>
            <input className='Login_form_input'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='Login_form_content'>
            <label>Password:</label><br/>
            <input className='Login_form_input'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='Login_form_button'>
          <button type="submit" className='Login_button'>Login</button>
          </div>
        </form>
        </div>
        </Grid>
        <Grid xs={3}></Grid>
        </Grid>
        </div>
      </div>
    );
  }
  
  export default Login;