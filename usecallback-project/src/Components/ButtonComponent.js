import React from 'react'

const ButtonComponent = (props) => {
    console.log(`Button Component for ${props.children}`)
  return (
    <div>
        <button onClick={props.handleClick}>{props.children}</button>
    </div>
  )
}

export default React.memo(ButtonComponent);