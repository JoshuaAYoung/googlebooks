import React, { Component } from "react";
import "./BookCard.css";

class BookCard extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.bookInfo.volumeInfo.title}</h2>
        <img
          src={this.props.bookInfo.volumeInfo.imageLinks.thumbnail}
          alt={"Cover of" + this.props.bookInfo.volumeInfo.title}
        />
        <p>Author: {this.props.bookInfo.volumeInfo.authors}</p>
        <p>
          Price: ${this.props.bookInfo.saleInfo.retailPrice.amount || "Unknown"}
        </p>
        <p>{this.props.bookInfo.volumeInfo.description}</p>
      </div>
    );
  }
}

export default BookCard;
