import React from 'react'

const CountComponent = (props) => {
    console.log(`Count component ${props.text}`)
    return (
        <div>
            {props.text} is {props.count}
        </div>
    )
}

export default React.memo(CountComponent);