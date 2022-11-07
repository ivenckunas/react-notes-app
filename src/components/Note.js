import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

function Note({ id, text, date, handleDeleteNote }) {
  return (
    <div className='note'>
      <p>{text}</p>
      <div className='note-footer'>
        <p>{date}</p>
        <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-icon' />
      </div>
    </div>
  )
}

export default Note