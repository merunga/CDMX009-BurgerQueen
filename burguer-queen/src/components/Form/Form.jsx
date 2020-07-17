import React from 'react'

const Form = (props) => {
  return (
    <div>

      <input type={props.types}
        placeholder={props.text}
        className="form-control mb-2"
        onChange={props.changeAction}
        value={props.val}

      />

    </div>
  )
}

export default Form


