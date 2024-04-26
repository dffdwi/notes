import React from "react";
import { useParams, Link } from "react-router-dom";
import { getNote } from "../utils/local-data";
import { showFormattedDate } from "../utils/index";
import NotFoundPage from "./NotFoundPage";
import { FiHome, FiArchive } from "react-icons/fi";

function NoteDetailPage() {
  const { id } = useParams();
  const note = getNote(id);

  if (!note) {
    return <NotFoundPage />;
  }

  return (
    <div className="App">
      <header className="note-app__header">
        <h1>Detail Notes</h1>
        <Link className="nav" to="/archive">
          <FiArchive />
        </Link>
        <Link className="nav" to="/">
          <FiHome />
        </Link>
      </header>
      <div className="note-detail">
        <h1>{note.title}</h1>
        <p>Date: {showFormattedDate(note.createdAt)}</p>
        <p>{note.body}</p>
      </div>
    </div>
  );
}

export default NoteDetailPage;
