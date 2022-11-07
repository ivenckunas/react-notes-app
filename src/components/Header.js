import React from 'react'

function Header({ handleDarkMode }) {
  return (
    <div className='header'>
      <h1>Notes</h1>
      <button
        onClick={() => handleDarkMode((prev) => !prev)}
        className='save'>Toggle mode</button>
    </div>
  )
}

export default Header