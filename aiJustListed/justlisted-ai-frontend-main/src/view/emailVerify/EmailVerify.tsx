import React ,{useEffect}from 'react'
import { useNavigate } from 'react-router-dom';

function EmailVerify() {
    const navigate = useNavigate()
    useEffect(() => {
     setTimeout(() => {
        navigate("/emailVerify");
        
     }, 3000);
    }, [])
    
  return (
    <div className="register">
      <div className="container">
        <span style={{ fontSize: 32, color: "white" ,fontWeight:600}}>
          Please Verify Your Email
        </span>
      </div>
    </div>
  )
}

export default EmailVerify
