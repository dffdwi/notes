import React, { Component } from "react";
import PropTypes from "prop-types";

class NoteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      titleCharLimit: 50,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title" && value.length > this.state.titleCharLimit) {
      return;
    }
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, body } = this.state;
    if (!title.trim() || !body.trim()) return;

    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    console.log("New Note:", newNote);

    this.props.addNote(newNote);

    this.setState({
      title: "",
      body: "",
    });
  };

  render() {
    const { title, body, titleCharLimit } = this.state;
    return (
      <div className="note-input">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.handleChange}
            maxLength={titleCharLimit}
            required
          />
          <span className="note-input__title__char-limit">
            {titleCharLimit - title.length} characters left
          </span>
          <textarea
            name="body"
            placeholder="Note"
            value={body}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Add Note</button>
        </form>
      </div>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
