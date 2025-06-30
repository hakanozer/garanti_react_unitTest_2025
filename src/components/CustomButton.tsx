import React, { MouseEvent } from 'react'

const CustomButton = (props: { onClick: React.MouseEventHandler<HTMLButtonElement> }) => {
    return <button className='btn btn-danger' onClick={props.onClick}>Send</button> 
}

export default CustomButton