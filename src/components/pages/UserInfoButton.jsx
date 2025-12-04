import React from 'react'

export default function UserInfoButton({onClick}) {
  return (
    <div>
      <button onClick={onClick} className='button'>erstellen</button>
    </div>
  )
}
