import React, {useState} from 'react';

import AddIcon from '@material-ui/icons/Add';

function CreateNote(props) {
  const [note, setNote] = useState({ // set the initial state to nothing
      title: "",
      text: ""
  });

  function handleClick(e) {

    if (note.title ==="" && note.text === "") {
      return;
    }
    props.passNote(note); // when the user clicks the add button, i pass the note obj back to App.js using the getNote function being passed here
    e.preventDefault();
    // set the title and text fields back to empty
    setNote({
      title: "",
      text: ""
    })
  }

  function handleChange(e) {
    const {name, value} = e.target; // deconstruct the obj
    // when the user clicks on one of the fields,
    //I check the name propperty from the e.target object
    // if it is title, then i get the value of the title field and spread the previous value to it
    // finally i return it
    setNote((pre) => {
      return ({
        ...pre,
        [name]:value})
    })
    // if i dont use the above approach, i have to set one state for input and one state for textarea to change it
    // or i can use the below syntax which is longer but more readable
    // if (name == "title") {
    //   setNote((pre) =>{
    //   return  {title: value,
    //     text: pre.text}
    //   })
    // } else {
    //   setNote((pre)=>{
    //     return {
    //       title: pre.title,
    //       text: value
    //     }
    //   })
    // }
  }
  // end of handleChange

  return (
    <div>
    <form className="form" autoComplete="off" >
      <input onChange={handleChange} name="title" type="text" placeholder="Enter A Title" value={note.title} ></input>
      <textarea  onChange={handleChange} name="text" rows="3" cols="50" placeholder="Enter Text" value= {note.text} ></textarea>
      <button onClick={handleClick}><AddIcon type="submit"></AddIcon></button>
    </form>
    </div>
  );
}

export default CreateNote;
