import React from 'react'

const TitleComponent = () => {
    console.log("Title Component Renders")
  return (
    <div>TitleComponent</div>
  )
}

export default React.memo(TitleComponent);