/* global chrome */

import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {

  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = () => {
    setLoading(true);

    chrome.runtime.sendMessage({ type: "getTabContent" }, (response) => {
      console.log(response.content)
      if (response && response.content) {
        // Making the request to the Gemini API
        axios
          .post(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
            {
              contents: [
                {
                  // parts: [{ text: "Explain how AI works" }], // Demo text as input
                  parts: [{ text: `Provide me a summary of this content in bullet points${response.content}` }], // Tab content as input
                },
              ],
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
              params: {
                key: process.env.REACT_APP_GOOGLE_API_KEY, // Your API key from .env
              },
            }
          )
          .then((res) => {
            console.log(res)
            if (res.data.candidates && res.data.candidates[0].content.parts[0].text) {
              const generatedText = res.data.candidates[0].content.parts[0].text;
              console.log(generatedText)
              setSummary(generatedText);
            } else {
              setSummary("No summary generated.");
            }
            setLoading(false);
          })
          .catch((err) => {
            console.error("Gemini API error:", err);
            setSummary("Failed to generate summary.");
            setLoading(false);
          });
      } else {
        setSummary("No content found.");
        setLoading(false);
      }
    });
  };

  return (
    <div className="container">
      <div className="header-container">
        <h3>Click the button below to Summarize the webpage</h3>
        <button onClick={handleSummarize} disabled={loading} className="summarize-button">
          {loading ? "Summarizing..." : "Summarize"}
        </button>
      </div>

      {summary && (
        <div className="summary-container">
          <h4>Summary:</h4>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default App;
