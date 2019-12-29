import React from "react";
import ReactDOM from "react-dom";
import BookSearch from "./booksearch";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BookSearch />, div);
  ReactDOM.unmountComponentAtNode(div);
});
