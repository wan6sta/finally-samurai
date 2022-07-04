import s from './header.module.scss'
import userIcon from '../../assets/images/profile.png'

import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProfile, getProfileInfo} from "../../redux/reducers/authReducer";
import LoadingMain from "../Loading/LoadingMain";

const Header = () => {
  const dispatch = useDispatch()
  const {
    id,
    login,
    isLogin,
    isLoading,
    profileInfo
  } = useSelector(state => state.authReducer)

  useEffect(() => {
    dispatch(getProfile()).then(res => {
      if (res.id)
        dispatch(getProfileInfo(res.id))
    })
  }, [])

  return <div className={s.header}>
    <div className="container">
      <div className={s.row}>
        <div className={s.logo}>
          <Link to={`profile/${id}`}>FS</Link>
        </div>

        <div className={s.userProfile}>
          {isLoading
            ? <LoadingMain/>
            : <div className={s.login}>
              {
                isLogin
                  ? <div className={s.loginInner}>
                    <img src={
                      profileInfo.photos?.small
                        ? profileInfo.photos.small
                        : userIcon} alt="ava"/>
                    {login}
                  </div>
                  : <Link to='login'>Login</Link>
              }
            </div>
          }
        </div>
      </div>
    </div>
  </div>
}

export default Header