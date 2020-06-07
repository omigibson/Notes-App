import React from 'react'
import Button from './button.js'
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
               ? <Button cls="save" noteId={note.id} onClick={props.onSaveClick} buttonText="Save" />
               : <Button cls="edit" noteId={note.id} onClick={props.onEditClick} buttonText="Edit" />
               }

               <Button cls="delete" noteId={note.id} onClick={props.onDeleteClick} buttonText="Delete" />
              </li>
           ))}
         </ul>
      </section>
   )
}

export default NotesList
