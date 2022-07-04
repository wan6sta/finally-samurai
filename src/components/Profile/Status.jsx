import React, {useState} from 'react';
import s from './profile.module.scss'
import {putStatus} from "../../redux/reducers/authReducer";


const Status = ({status, dispatch}) => {
  const [editStatus, setEditStatus] = useState(false)
  const [statusInput, setStatusInput] = useState('')


  return <>
    {editStatus
      ? <input
        className={s.inputStatus}
        onChange={e => setStatusInput(e.target.value)}
        type="text"
        onBlur={() => {
          setEditStatus(false)
          dispatch(putStatus(statusInput))
        }}
        autoFocus={true}
        value={statusInput}
      />
      : <p className={s.status} onClick={() => setEditStatus(true)}
      >Status: {statusInput ? statusInput : status}</p>
    }
  </>
};

export default Status;