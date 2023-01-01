import React, { useState } from "react";
export default function TextArea(props) {
  const handleUpClick = () => {

    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {

    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleClearClick = () => {
    const newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text Here...");
  //   text="new text" //Wrong way to change the state
  //   setText("new text") //Right way to change the state
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          style={{
            backgroundColor: props.mode === "dark" ? "#152238" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          rows="8"
          onChange={handleOnChange}
        ></textarea>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-1"
          onClick={handleUpClick}
        >
          Convert To UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-1"
          onClick={handleLoClick}
        >
          Convert To LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger my-3 mx-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success my-3 mx-1"
          id="inputText"
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-1"
          id="inputText"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Text Summary</h2>
        <p>
          No of Words:{" "}
          {
            text.split(/\s+/).filter(function (n) {
              return n !== "";
            }).length
          }{" "}
        </p>
        <p>No of Characters: {text.length}</p>
        <p>
          Estimated Reading Time:{" "}
          {0.008 *
            text.split(" ").filter(function (n) {
              return n !== "";
            }).length}{" "}
          Minutes
        </p>
        <h2>Preview Document</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
      </div>
    </>
  );
}
