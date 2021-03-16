import React from 'react'

const UseInput=(props)=> {
    return (
        <div>
            <input type="text" onChange={props.change} value={props.currentName} />   
        </div>
    )
}
export default UseInput;