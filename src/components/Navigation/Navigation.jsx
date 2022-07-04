import s from './navigation.module.scss'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Navigation = () => {
  const {id} = useSelector(state => state.authReducer)

  return <div className={s.navigation}>
      <div className={s.row}>
        <div className={s.nav}>
          <NavLink className={({isActive}) => isActive ? s.focus : null} to={`profile/${id}`}>My Profile</NavLink>
          <NavLink className={({isActive}) => isActive ? s.focus : null} to='messages'>Messages</NavLink>
          <NavLink className={({isActive}) => isActive ? s.focus : null} to='users'>Users</NavLink>
          <NavLink className={({isActive}) => isActive ? s.focus : null} to='settings'>Settings</NavLink>
        </div>
      </div>
  </div>
}

export default Navigation;