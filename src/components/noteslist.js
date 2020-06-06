import React from 'react'
import '../css/noteslist.css'

function NotesList (props) {
   return (
      <section>
         <h2>All Notes</h2>
         <ul className="notes-list">
           {props.notes.map((note, index) => (
              <li key={index} className="note">
              <div>{props.editNote.editing === note.id
                 ? <input id="editTitle" aria-label="Title" onChange={props.onInput} value={props.editNote.editTitle} />
                 : <h3>{note.title}</h3> }
               </div>
               <div>{props.editNote.editing === note.id
                  ? < input id="editDescription" aria-label="Description" onChange={props.onInput} value={props.editNote.editDescription} />
                  : <p>{note.description}</p> }
               </div>
               { props.editNote.editing === note.id
               ? <button className="save" onClick={() => props.onSaveClick(note.id)}>Save</button>
               : <button className="edit" onClick={() => props.onEditClick(note.id)}>Edit</button>
               }
               <button className="delete" onClick={() => { props.onDeleteClick(note.id)}}>Delete</button>
              </li>
           ))}
         </ul>
      </section>
   )
}

export default NotesList
