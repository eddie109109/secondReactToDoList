import React, {useState} from 'react';
import Heading from "./components/Heading";
import CreateNote from "./components/CreateNote";
import Footer from "./components/Footer";
import Note from "./components/Note";
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';

function App() {
  const [notes, setNotes] = useState([]); // set an empty array of notes to store all the notes being passed here

  function addNote(note) {
    setNotes((pre) =>{
      return [...pre,note]; // return a new array, spreading the previous array with the new note added
    })
  }

  function deleteNote(noteId) {
    setNotes(
      (pre,index) => {return notes.filter((note, index)=>index !== noteId)}
      // use filter function to filter out the note with the id that is the same as the current array
      // because of the result of the delete button
    );
  }

  return (
    <div>
      <div className="mainWrapper">
      <Heading />
      <CreateNote passNote={addNote} />
      <div className="container">
      {
        notes.map((note,index) =>{
        return ( <Note
          key= {index}
          id= {index}
          title = {note.title}
          content = {note.text}
          passNote = {deleteNote}
          />)
        })
      }
      </div>

      </div>
    <Footer />
    </div>
  );
}

export default App;
