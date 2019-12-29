import React, { Component } from "react";
import "./BookSearch.css";

class BookSearch extends Component {
  render() {
    return (
      <form onSubmit={e => this.props.onSubmit(e)}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Enter a search term"
          value={this.props.query}
          onChange={e => this.props.inputChanged(e.target.value)}
        />
        <button type="submit">Search</button>
        <label>Print Type:</label>
        <select
          name="printtype"
          onChange={e => this.props.printTypeChanged(e.target.value)}
        >
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
        <label>Book Type:</label>
        <select
          name="booktype"
          onChange={e => this.props.bookTypeChanged(e.target.value)}
        >
          <option value="">No Filter</option>
          <option value="ebooks">eBooks</option>
          <option value="free-ebooks">Free eBooks</option>
          <option value="full">Free Full Text eBooks</option>
          <option value="paid-ebooks">Paid eBooks</option>
          <option value="partial">Partially Free eBooks</option>
        </select>
      </form>
    );
  }
}

export default BookSearch;
