import React from 'react'
import './UseOutput.css'

const UseOutput=(props)=> {
    return (
        <div className="UseOutput" >
            <p>Hello {props.userName}</p>
            <p>Its Time To Practice React js</p>
        </div>
    )
}
export default UseOutput;