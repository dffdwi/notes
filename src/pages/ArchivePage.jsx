import React, { Component } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  getArchivedNotes,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils/local-data";
import { showFormattedDate } from "../utils/index";
import Archive from "../component/Archive";
import Search from "../component/Search";
import { FiHome, FiPlusCircle } from "react-icons/fi";
import PropTypes from "prop-types";

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class ArchivePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archivedNotes: [],
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  componentDidMount() {
    this.setState({ archivedNotes: getArchivedNotes() });
  }

  deleteNote = (id) => {
    deleteNote(id);
    this.setState({ archivedNotes: getArchivedNotes() });
  };

  archiveNote = (id) => {
    archiveNote(id);
    this.setState({ archivedNotes: getArchivedNotes() });
  };

  unarchiveNote = (id) => {
    unarchiveNote(id);
    this.setState({ archivedNotes: getArchivedNotes() });
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
    const filteredArchivedNotes = this.state.archivedNotes.filter((note) =>
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );
    return (
      <div className="App">
        <header className="note-app__header">
          <h1>Personal Notes</h1>
          <Link className="nav" to="/">
            <FiHome />
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
          <Archive
            archivedNotes={filteredArchivedNotes}
            deleteNote={this.deleteNote}
            archiveNote={this.archiveNote}
            unarchiveNote={this.unarchiveNote}
            showFormattedDate={showFormattedDate}
          />
        </div>
      </div>
    );
  }
}

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchivePageWrapper;
