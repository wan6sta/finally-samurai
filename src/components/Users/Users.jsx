import s from './users.module.scss'

import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers, setPage} from "../../redux/reducers/usersReducer";
import User from "./User";
import LoadingMain from "../Loading/LoadingMain";
import {useNavigate} from "react-router-dom";

const Users = () => {
  const dispatch = useDispatch()
  const {users, isLoading, page, count, allCount} = useSelector(state => state.usersReducer)
  const {isLogin} = useSelector(state => state.authReducer)
  const navigate = useNavigate()

  let pagination = []

  useEffect(() => {
    if (!isLogin) {
      navigate(`/login`, {replace: true})
    }

    dispatch(getUsers(count, page))
  }, [page])

  for (let i = 1; i <= Math.ceil(allCount/count); i++) {
    pagination.push(i)
  }

  const spanPagination = pagination.map(num => <span
    className={num === page ? s.pagination + ' ' + s.focus : s.pagination}
    key={num}
    onClick={() => dispatch(setPage(num))}
  >{num}</span>)

  const usersComponents = users.map(user => <User
    key={user.id}
    id={user.id}
    name={user.name}
    status={user.status}
    photos={user.photos}
    followed={user.followed}
    isLoading={isLoading}
  />)

  return <div className={s.users}>
    <div className={s.paginationWrap}>
      {spanPagination}
    </div>
    {isLoading
      ? <LoadingMain/>
      : <div className={s.users}>{usersComponents}</div>
    }
  </div>
};

export default Users;