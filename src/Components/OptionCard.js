import React, { useEffect, useRef } from 'react'
import { Icon } from '@iconify/react';

const OptionCard = (props) => {
  const optionRef = useRef(null);
  useEffect(() => {
    optionRef.current.focus();
    props.setUserData(prev => {
      return {
        ...prev, ["option"]: "user"
      }
    })
  }, [])
  const handleClick = (option, e) => {
    props.setUserData(prev => {
      return {
        ...prev, ["option"]: option
      }
    })
  }
  return (
    <div className='Options'>
      <div id="user" className='option-card' tabIndex="0" ref={optionRef} onClick={(e) => { handleClick("user", e) }}>
        <div className='icon-container'>
          <Icon className="icon" icon="ri:user-fill" width="25" height="25" />
        </div>
        <div className='content'>
          <h4>For myself</h4>
          <p>Write better. Think more clearly. Stay orgainized.</p>
        </div>
      </div>
      <div id="team" className='option-card' tabIndex="1" onClick={() => { handleClick("team") }}>
        <div className='icon-container'>
          <Icon className="icon" icon="ri:team-fill" width="25" height="25" />
        </div>
        <div className='content'>
          <h4>With my team</h4>
          <p>Wikis, docs, tasks & projects, all in one place.</p>
        </div>
      </div>
    </div>
  )
}

export default OptionCard