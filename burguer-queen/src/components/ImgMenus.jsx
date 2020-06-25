import React from 'react'

const ImgMenus = (props) => {
    return (
        <div>
           <img src={props.src} className={props.style} onClick={props.action}/>
        </div>
    )
}

export default ImgMenus



