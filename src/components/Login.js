import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [userName, setUserName] = useState('')
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        console.log(userName)
        dispatch({ 
          type: 'GET_USERNAME',
          payload: userName
        })
        setUserName('')
        navigate('/Pokedex')
    }

  return (
    <div className='background-login'>
      <div className='container-title'>
       <h1 className='copyright'>Copyright <br/>By <br/>Ariel Fuentes García<br/> and<br/> Carlos Eduardo Rodríguez</h1>
      </div>
      <div className='container-subtitle'>
       
      </div>
    <div className='login-form'>
        <form action="" onSubmit={submit}>
            <input  
            type="text"
            placeholder="Enter your name master" 
            value={userName} 
            onChange={e => setUserName(e.target.value)}/>
            <button>Submit</button>    
        </form>
        </div>      
    </div>
  )
}

export default Login