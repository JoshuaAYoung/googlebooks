import React, { Component } from "react";
import BookCard from "../bookcard/BookCard.js";
import "./BookList.css";

class BookList extends Component {
  render() {
    console.log("booklist data", this.props.bookData);
    const bookcards = this.props.bookData ? (
      this.props.bookData.map((bookdata, idx) => (
        <BookCard bookInfo={bookdata} key={idx} />
      ))
    ) : (
      <p>No results. Please try your search again.</p>
    );
    return <div>{bookcards}</div>;
  }
}

export default BookList;
