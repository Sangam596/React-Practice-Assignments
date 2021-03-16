import React from 'react'

const Char = props => {
    const style ={
        display : 'inline-block',
        margin : '16px',
        padding :'16px',
        border:'1px solid black',
        boxShadow : '0 2px 3px #ccc',
        textAlign : 'centre',
        cursor:'pointer'
    }
    return (
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    )
}
export default Char;