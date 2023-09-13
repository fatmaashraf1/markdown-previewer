import data from "../data.json";
import React, { useState, useEffect } from "react";

const Docs = () => {
  const [docsContent, setDocsContent] = useState([]);

  useEffect(() => {
    setDocsContent(data.basic_syntax);
    console.log(data.basic_syntax);
  }, []);

  return (
    <>
      <div className="docs-container">
        {docsContent.map((syntaxItem, index) => (
          <div key={index} className="main-syntax">
            <h2>{syntaxItem.name}</h2>
            <p>{syntaxItem.description}</p>
            <ul>
              {syntaxItem.examples.map((example, exampleIndex) => (
                <div className="example">
                  <li key={exampleIndex}>
                    <h3>Example {exampleIndex + 1}</h3>
                    <div>
                      <strong>Markdown:</strong> {example.markdown}
                    </div>
                    <div>
                      <strong>HTML:</strong> {example.html}
                    </div>
                  </li>
                </div>
              ))}
            </ul>
            <ul>
              {syntaxItem.additional_examples.length > 0 &&
                syntaxItem.additional_examples.map((example, exampleIndex) => (
                  <div>
                    <li key={exampleIndex} className="example">
                      <h3>{example.name}</h3>
                      <p>{example.description}</p>
                      <div>
                        <strong>Markdown:</strong> {example.markdown}
                      </div>
                      <div>
                        <strong>HTML:</strong> {example.html}
                      </div>
                    </li>
                  </div>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Docs;
