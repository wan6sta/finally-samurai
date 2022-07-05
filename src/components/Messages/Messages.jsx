import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useSelector} from "react-redux";

const Messages = () => {
  const navigate = useNavigate()
  const {isLogin} = useSelector(state => state.authReducer)

  useEffect(() =>{
    if (!isLogin) {
      navigate(`/login`, {replace: true})
    }
  } , [])



  return <>
    Messages
  </>
};

export default Messages;