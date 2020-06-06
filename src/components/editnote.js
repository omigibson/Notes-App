import React from 'react'
import '../css/addnote.css'

function EditNote (props) {
   if (!props.editing){
      return (
         <button className="edit" onClick={() => props.onEditClick(props.noteId)}>Edit</button>
      )
   }
   return (
      <button className="update" onClick={() => props.onEditClick(props.noteId)}>Update</button>
   )
}

export default EditNote
