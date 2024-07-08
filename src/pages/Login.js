/* eslint-disable jsx-a11y/alt-text */
// Login2.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [linkEnabled, setLinkEnabled] = useState(false);
  
    const handleUsernameChange = (e) => {
      const { value } = e.target;
      setUsername(value);
      checkInputValues(value, password);
    };
  
    const handlePasswordChange = (e) => {
      const { value } = e.target;
      setPassword(value);
      checkInputValues(username, value);
    };
  
    const checkInputValues = (username, password) => {
      // Check if both username and password fields are not empty
      if (username.trim() !== '' && password.trim() !== '') {
        setLinkEnabled(true); // Enable the link
      } else {
        setLinkEnabled(false); // Disable the link
      }
    };

    return (
        <div className='all-login'>
            <div className='container-fluid'>
                <div className='row'>
                <div className='col-md-6' style={{ height: "100vh", backgroundColor: "#fff" , display:"flex",alignItems:"center"}}>
                        <div className='col-md-8  ml-auto mr-auto login-edit'>
                            <h3 className='text-center mb-4' style={{fontWeight: "600"}}>Login</h3>
                            <form>
                                <div class="form-group">
                                    <label className='d-flex'  style={{justifyContent:"start"}} for="username">E_Mail</label>
                                    <input type="email"  class="form-control " id="username" value={username} onChange={handleUsernameChange} />
                                </div>
                                <div class="form-group">
                                    <label className='d-flex' style={{justifyContent:"Start"}} for="password">password</label>
                                    <input type="password" class="form-control" id="password" value={password} onChange={handlePasswordChange} />
                                </div>
                                <div>
                                    {/* Disable the link when the fields are empty */}
                                    {linkEnabled ? (
                                        <Link to="/Home" className='text-decoration'>
                                            <button type="submit" class="btn btn-primary btn-block text-center mb-2">submit</button>
                                        </Link>
                                    ) : (
                                        <button type="submit" class="btn btn-primary btn-block text-center mb-2" disabled>submit</button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <img src='\imgs\Login.jpg' style={{ width: "100%", height: "90%" }}></img>

                    </div>
                    
                   
                </div>

            </div>
        </div>
    );
}
