import React from "react";
import { useNavigate, Link } from "react-router-dom";
import NoteInput from "../component/NoteInput";
import { addNote } from "../utils/local-data";
import { FiArchive, FiHome } from "react-icons/fi";

function AddNotePage() {
  const navigate = useNavigate();

  const handleAddNote = (newNote) => {
    addNote(newNote);
    navigate("/");
  };

  return (
    <div className="App">
      <header className="note-app__header">
        <h1>Add Note</h1>
        <Link className="nav" to="/archive">
          <FiArchive />
        </Link>
        <Link className="nav" to="/">
          <FiHome />
        </Link>
      </header>
      <div className="add-note-page">
        <NoteInput addNote={handleAddNote} />
      </div>
    </div>
  );
}

export default AddNotePage;
