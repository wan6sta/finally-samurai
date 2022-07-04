import s from './profile.module.scss'
import ava from '../../assets/images/profile.png'

import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getStatus} from "../../redux/reducers/authReducer";
import LoadingMain from "../Loading/LoadingMain";
import {getCurrentProfile} from "../../redux/reducers/profileReducer";
import Status from "./Status";


const Profile = () => {
  const {userId} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {id, isLogin, login, status, isLoading, profileInfo, email} = useSelector(state => state.authReducer)
  const {profileCurrentInfo} = useSelector(state => state.profileReducer)

  const [isMyProfile, setIsMyProfile] = useState(false)

  useEffect(() => {
    if (!userId)
      navigate(`/profile/${id}`, {replace: true})

    if (!isLogin) {
      navigate(`/login`, {replace: true})
    }

    if (isLogin) {
      dispatch(getStatus(id))
    }

    if (userId == id)
      setIsMyProfile(true)

    dispatch(getCurrentProfile(userId))
  }, [])


  return <div className={s.profile}>
    {isLoading && <LoadingMain/>}
    {isMyProfile
      ? <div className={s.cardUser}>
        <img src={
          profileInfo.photos?.large
            ? profileInfo.photos.large
            : ava
        } alt="ava"/>
        <p className={s.name}>{login}</p>
        <p>{email}</p>
        <Status status={status} dispatch={dispatch}/>
      </div>

      : <div className={s.cardUser}>
        <img src={
          profileCurrentInfo.photos?.small
            ? profileCurrentInfo.photos.small
            : ava
        } alt="ava"/>
        <p className={s.name}>{profileCurrentInfo.fullName}</p>
        <p>{profileCurrentInfo.aboutMe}</p>
        <p>{profileCurrentInfo.lookingForAJobDescription
        }</p>
      </div>
    }

  </div>
};

export default Profile;