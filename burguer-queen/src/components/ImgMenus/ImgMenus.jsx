import React from 'react'

const ImgMenus = (props) => {
    return (
        <div>
           <img src={props.src} className="btn img-fluid mt-5" alt={props.alt} onClick={props.action}/>
        </div>
    )
}

export default ImgMenus



