import React from 'react'
import '../css/button.css'

function Button (props) {
   return (
      <button type="button" className={props.cls} onClick={() => props.onClick(props.noteId)}>{props.buttonText}</button>
   )
}

export default Button
