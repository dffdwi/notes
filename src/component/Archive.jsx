import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

function Archive({
  archivedNotes,
  deleteNote,
  archiveNote,
  unarchiveNote,
  showFormattedDate,
}) {
  return (
    <div>
      <h2>Archived Notes</h2>
      <div className="notes-list">
        {archivedNotes.length === 0 ? (
          <p className="notes-list__empty-message">No archived notes found</p>
        ) : (
          archivedNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              archiveNote={archiveNote}
              unarchiveNote={unarchiveNote}
              showFormattedDate={showFormattedDate}
            />
          ))
        )}
      </div>
    </div>
  );
}

Archive.propTypes = {
  archivedNotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteNote: PropTypes.func.isRequired,
  archiveNote: PropTypes.func.isRequired,
  unarchiveNote: PropTypes.func.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
};

export default Archive;
