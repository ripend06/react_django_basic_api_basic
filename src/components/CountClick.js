import React from 'react'

const CountClick = ({handleClick, children}) => {
    console.log('clicked', children)
  return (
    <div>
        <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default React.memo(CountClick)