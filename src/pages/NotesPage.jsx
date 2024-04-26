import React, { Component } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  getAllNotes,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils/local-data";
import { showFormattedDate } from "../utils/index";
import NotesList from "../component/NotesList";
import Search from "../component/Search";
import { FiArchive, FiPlusCircle } from "react-icons/fi";
import PropTypes from "prop-types";

function NotesPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <NotesPage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class NotesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  componentDidMount() {
    this.setState({ notes: getAllNotes() });
  }

  deleteNote = (id) => {
    deleteNote(id);
    this.setState({ notes: getAllNotes() });
  };

  archiveNote = (id) => {
    archiveNote(id);
    this.setState({ notes: getAllNotes() });
  };

  unarchiveNote = (id) => {
    unarchiveNote(id);
    this.setState({ notes: getAllNotes() });
  };

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
    this.props.keywordChange(keyword);
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );
    return (
      <div className="App">
        <header className="note-app__header">
          <h1>Personal Notes</h1>
          <Link className="nav" to="/archive">
            <FiArchive />
          </Link>
          <Link className="nav" to="/add-note">
            <FiPlusCircle />
          </Link>
        </header>
        <div className="note-app__body">
          <Search
            keyword={this.state.keyword}
            keywordChange={this.onKeywordChangeHandler}
          />
          <NotesList
            notes={filteredNotes}
            deleteNote={this.deleteNote}
            archiveNote={this.archiveNote}
            unarchiveNote={this.unarchiveNote}
            showFormattedDate={showFormattedDate}
            searchNotes={this.props.searchNotes}
          />
        </div>
      </div>
    );
  }
}

NotesPage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default NotesPageWrapper;
