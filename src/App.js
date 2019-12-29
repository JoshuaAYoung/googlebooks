import React, { Component } from "react";
import "./App.css";
import BookList from "./booklist/BookList.js";
import BookSearch from "./booksearch/BookSearch.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
      query: "",
      printType: "books",
      bookType: "ebooks",
      error: ""
    };
  }

  inputChanged(query) {
    this.setState({
      query
    });
  }

  bookTypeChanged(bookType) {
    this.setState({
      bookType
    });
  }

  printTypeChanged(printType) {
    this.setState({
      printType
    });
  }

  formatQueryParams(params) {
    const queryItems = Object.keys(params).map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    );
    return queryItems.join("&");
  }

  handleSubmit(e) {
    e.preventDefault();
    const baseUrl = "https://www.googleapis.com/books/v1/volumes?";
    const params = {
      q: this.state.query,
      langRestrict: "en",
      maxResults: 10,
      printType: this.state.printType,
      filter: this.state.bookType,
      orderBy: "relevance",
      API_KEY: "AIzaSyCf3qkx89MkKulaeQQU6Kwanu-uHoyRecM"
    };
    const queryString = this.formatQueryParams(params);
    const url = baseUrl + queryString;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          bookData: data.items,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    console.log(this.state.bookData);
    const error = this.state.error ? (
      <div className="error">ERROR: {this.state.error}</div>
    ) : (
      ""
    );

    return (
      <>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main>
          <BookSearch
            onSubmit={e => this.handleSubmit(e)}
            inputChanged={e => this.inputChanged(e)}
            printTypeChanged={e => this.printTypeChanged(e)}
            bookTypeChanged={e => this.bookTypeChanged(e)}
            query={this.state.query}
            error={this.state.error}
          />
          {error}
          <BookList bookData={this.state.bookData} />
        </main>
      </>
    );
  }
}

export default App;
