import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import NotesPage from "./pages/NotesPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import ArchivePage from "./pages/ArchivePage";
import AddNotePage from "./pages/AddNotePage";
import NotFoundPage from "./pages/NotFoundPage";
import "./style/style.css";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/add-note" element={<AddNotePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    );
  }
}

export default App;
