import "./App.css";
import React, { useState } from "react";
import { marked } from "marked";
import useLocalStorage from "./components/useLocalStorage";
import Docs from "./components/Docs";

const App = () => {
  // Use the custom hook to store and retrieve markdown content
  const [code, setCode] = useLocalStorage("markdown", "## Hello");
  const [compiled, setCompiled] = useState(marked(code));
  const [showPreview, setShowPreview] = useState(true);
  const [showMarkdown, setShowMark] = useState(false);
  const [showDocs, setShowDocs] = useState(false);

  const handleClick = (id) => {
    for (let i = 1; i < 4; i++) {
      if (i === id) continue;
      else document.querySelector(`.btn-${i}`).classList.remove("active");
    }
    document.querySelector(`.btn-${id}`).classList.add("active");
  };
  const openDocs = () => {
    setShowMark(false);
    setShowDocs(true);
    setShowPreview(false);
  };

  const openMD = () => {
    setShowMark(true);
    setShowDocs(false);
    setShowPreview(false);
  };

  const openPreview = () => {
    setShowMark(false);
    setShowDocs(false);
    setShowPreview(true);
  };

  const handleChange = (e) => {
    setCode(e.target.value);
    setCompiled(marked(e.target.value));
  };

  return (
    <>
      <div className="main-container">
        <h1>MarkDown Previewer React App</h1>

        <div className="btns">
          <button
            onClick={() => {
              openMD();
              handleClick(1);
            }}
            className="btn-1 active"
          >
            MarkDown
          </button>
          <button
            onClick={() => {
              openPreview();
              handleClick(2);
            }}
            className="btn-2"
          >
            Preview
          </button>
          <button
            onClick={() => {
              openDocs();
              handleClick(3);
            }}
            className="btn-3"
          >
            Docs
          </button>
        </div>
        <div className="editor-container">
          {showMarkdown && (
            <div>
              <textarea onChange={handleChange} value={code} />
            </div>
          )}
          {showPreview && (
            <div>
              <textarea value={compiled} />
            </div>
          )}
          {showDocs && <Docs />}
        </div>
      </div>
    </>
  );
};

export default App;
