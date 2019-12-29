import React from "react";
import ReactDOM from "react-dom";
import BookCard from "./bookcard";

const bookInfo = { volumeInfo: { imageLinks: {} }, saleInfo: {} };

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BookCard bookInfo={bookInfo} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
