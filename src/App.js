import { useEffect, useState } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid'
import Search from './components/Search';
import Header from './components/Header';

function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my 1st note",
      date: "2022/11/07"
    },
    {
      id: nanoid(),
      text: "this is my 2nd note",
      date: "2022/11/07"
    },
    {
      id: nanoid(),
      text: "this is my 3rd note",
      date: "2022/11/07"
    }
  ]);

  const [searchText, setSearchText] = useState('')

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes))
  }, [notes])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode && 'dark-mode'} `}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
