import React, {useState} from 'react';
import s from './test.module.scss'

const Test = () => {

  const [value, setValue] = useState()

  return <div className={s.main}>
    <input
      value={value}
      onChange={e => setValue(e.target.value)}
      className={s.input}
      type="text"/>
  </div>
};

export default Test;