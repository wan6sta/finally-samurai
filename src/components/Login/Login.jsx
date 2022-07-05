import React, {useEffect, useState} from 'react';
import s from './login.module.scss'
import {useDispatch, useSelector} from "react-redux";

import {useNavigate} from "react-router-dom";
import {login} from "../../redux/reducers/authReducer";


const Login = () => {
  const {isLogin, id} = useSelector(state => state.authReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  useEffect(() => {
    if (isLogin) {
      navigate(`/profile/${id}`, {replace: true})
    }
  })

  return <>
    <div className={s.form}>
      <form>
        <input onChange={e => setEmail(e.target.value)} value={email} type="text" placeholder={'email'}/>
        <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder={'password'}/>
          <label onChange={() => {
            setRemember(!remember)
          }
          }>
            <input onChange={() => {
              setRemember(!remember)
            }} checked={remember} type="checkbox"/> remeber me?
          </label>
        <button onClick={() => {
          if (email && password) {
            console.log(email, password, remember)
            dispatch(login(email, password, remember))
          }
        }
        } type={"button"}>Login</button>
      </form>

    </div>
  </>

}

export default Login;