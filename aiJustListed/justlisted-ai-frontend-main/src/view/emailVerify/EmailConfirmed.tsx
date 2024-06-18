import React, { useEffect } from 'react'
import baseUrl from '../../baseURL';
import { toast } from 'react-toastify';

function EmailConfirmed() {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        if (token) {
            baseUrl
                .patch('user/emailValidate', { token: token })
                .then(response => {
    
                    console.log(response.data);
                    if (response.data.success) {
                        
                        toast("Email confirmed")
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    
    }, [])
  return (
    <div className="register">
    <div className="container">
      <span style={{ fontSize: 32, color: "white" ,fontWeight:600}}>
        Email confirmed
      </span>
    </div>
  </div>
  )
}

export default EmailConfirmed
