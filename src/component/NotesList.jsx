import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

function NotesList({
  notes,
  deleteNote,
  archiveNote,
  unarchiveNote,
  showFormattedDate,
}) {
  console.log("All Notes:", notes);

  const unarchivedNotes = notes.filter((note) => !note.archived);

  return (
    <div>
      <h2>Unarchived Notes</h2>
      <div className="notes-list">
        {unarchivedNotes.length === 0 ? (
          <p className="notes-list__empty-message">No unarchived notes found</p>
        ) : (
          unarchivedNotes.map((note) => (
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

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
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

export default NotesList;
