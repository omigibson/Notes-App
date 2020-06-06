import React from 'react'
import '../css/addnote.css'

function AddNote (props) {
   return (
      <section>
         <h2>Add Note</h2>
         <form>
            <label htmlFor="addTitle">Title</label>
            <input id="addTitle" value={props.note.addTitle ? props.note.addTitle : ''} onChange={props.onInput} />
            <label htmlFor="addDescription">Description</label>
            <input id="addDescription" value={props.note.addDescription ? props.note.addDescription : ''} onChange={props.onInput} />
            <button type="button" className="add" onClick={props.onSaveClick}>Save</button>
         </form>
      </section>
   )
}

export default AddNote
