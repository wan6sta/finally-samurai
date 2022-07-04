import React, {useEffect, useState} from 'react';
import s from './users.module.scss'
import ava from '../../assets/images/profile.png'
import {Link} from "react-router-dom";
import {getFollow} from "../../redux/reducers/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import LoadingHeart from "../Loading/LoadingHeart";

const User = ({id, name, status, photos, followed}) => {
  const dispatch = useDispatch()
  const [follow, setFollow] = useState(false)
  useEffect(() => {
    setFollow(followed)
  }, [])

  const {isHeart} = useSelector(state => state.usersReducer)

  return <>
    <div className={s.user}>
      <div className={s.avaWrap}>
        <Link to={`../profile/${id}`}>
          <div className={s.hoverUser}>
            <img src={photos?.small
              ? photos.small
              : ava
            } alt="ava"/>
            <span>{name}</span>
            <span>{status}</span>
          </div>
        </Link>
        <div className={s.buttonWrap}>

          {follow
            ? <button onClick={() => {
              dispatch(getFollow(follow, id)).then((res) => {
                if (res.data.resultCode === 0)
                  setFollow(false)
              })
            }}>Unfollow</button>
            : <button onClick={() => dispatch(getFollow(follow, id)).then((res) => {
              if (res.data.resultCode === 0)
                setFollow(true)
            })}>Follow</button>
          }
        </div>
      </div>
      <div>
      </div>
    </div>

  </>
};

export default User;