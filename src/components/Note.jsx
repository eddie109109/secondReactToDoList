import React, {useState} from "react";
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';


function Note(props) {

  function handleClick() {
    props.passNote(props.id)
    // use the id being passed here to identify which note and use the getNote function being passed here
    // get pass the id back to App.js for deletion since App.js has the array to manipulate
  }

  return (
    <div className="note">
    <h1 className= "noteh1">{props.title}</h1>
    <h3 className= "noteh3">{props.content}</h3>
    <RemoveSharpIcon className="noteDeleteButton" onClick={handleClick}><button onClick={handleClick} className= "noteDeleteButton">Delete</button></RemoveSharpIcon>
    </div>
  );

}

export default Note;
