import React from 'react';
import NotesList from './components/noteslist'
import AddNote from './components/addnote'

class App extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
        newNote: {},
        notesList: [],
        editNote: {},
     }
  }
  componentDidMount () {
     fetch('https://timesheet-1172.appspot.com/a529f225/notes')
     .then(res => res.json())
     .then((data) => {
        this.setState({ notesList: data })
        })
        .catch(console.log)
 }

 handleInput = (event) => {
    if (event.target.id.includes('add') ){
       this.setState({
         newNote: {
            ...this.state.newNote,
            [event.target.id]: event.target.value
         }
      })
   }
   else {
      this.setState({
        editNote: {
           ...this.state.editNote,
           [event.target.id]: event.target.value
        }
     })
   }
}

handleSave = (event) => {
   event.preventDefault();
   fetch('https://timesheet-1172.appspot.com/a529f225/notes', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       title: this.state.newNote.addTitle,
       description: this.state.newNote.addDescription
     })
   })
   .then( (response) => response.json())
   .then((json) => {
      this.setState({
         newNote: {},
         notesList: this.state.notesList.concat(json)
     })
   })
   .catch((error) => console.error(error))
}

handleEdit = (id) => {
   let noteToEdit = this.state.notesList.find(obj => obj.id === id);
   this.setState({
      editNote: {
         ...this.state.editNote,
         editing: id,
         editTitle: noteToEdit.title,
         editDescription: noteToEdit.description
      }
   })
}

handleSaveEdit = (id) => {
   fetch(`https://timesheet-1172.appspot.com/a529f225/notes/${id}`, {
     method: 'PUT',
     headers: {
      'Content-Type': 'application/json',
     },
     body: JSON.stringify({
      title: this.state.editNote.editTitle,
      description: this.state.editNote.editDescription
     })
   })
   .then( (response) => response.json())
   .then((json) => {
      let notes = [...this.state.notesList]
      let noteToEdit = this.state.notesList.find(obj => obj.id === id)
      let editIndex = this.state.notesList.indexOf(noteToEdit)
      let copyOfNoteToEdit = {...notes[editIndex]}
      copyOfNoteToEdit.id = json.id
      copyOfNoteToEdit.title = json.title
      copyOfNoteToEdit.description = json.description
      notes[editIndex] = copyOfNoteToEdit
      this.setState({
         editNote: {},
         notesList: notes
     })
   })
   .catch((error) => console.error(error))
}

handleDelete = (id) => {
   fetch(`https://timesheet-1172.appspot.com/a529f225/notes/${id}`, {
     method: 'DELETE'
   })
   .then( (response) => {
      if (response.ok){
         this.setState(prevState => ({
           notesList: prevState.notesList.filter(note => note.id !== id )
       }));
      }
   })
   .catch((error) => console.error(error))
}

  render(){
     return (
        <div>
           <header>
             <h1>Notes App</h1>
          </header>
          <main>
             <AddNote
                onInput={this.handleInput}
                note={this.state.newNote}
                onSaveClick={this.handleSave}
               />
             <NotesList
                notes={this.state.notesList}
                onEditClick={this.handleEdit}
                editNote={this.state.editNote}
                onInput={this.handleInput}
                onSaveClick={this.handleSaveEdit}
                onDeleteClick={this.handleDelete}
               />
          </main>
        </div>
     )
   }
}

export default App;
