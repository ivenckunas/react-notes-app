import React, { useState } from 'react'

function AddNote({ handleAddNote }) {

  const [noteText, setNoteText] = useState('')
  const charLimit = 200;

  const handleChange = (e) => {
    if (charLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value)
    }
  }

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText)
      setNoteText('')
    }
  }

  return (
    <div className='note add-note'>
      <textarea
        cols="10"
        rows="5"
        placeholder='Add new note...'
        value={noteText}
        onChange={handleChange}>

      </textarea>
      <div className="note-footer">
        <p>{charLimit - noteText.length} remaining</p>
        <button
          className='save'
          onClick={handleSaveClick}
        >Add note</button>
      </div>
    </div>
  )
}

export default AddNote