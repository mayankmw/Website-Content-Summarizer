import React, { useState } from "react";
import axios from "axios";

const Popup = () => {
  const [summary, setSummary] = useState("");
  const [length, setLength] = useState("short");

  const summarizeContent = async () => {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      const tabContent = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => document.body.innerText, // Extract all visible text
      });

      const response = await axios.post("https://api.openai.com/v1/completions", {
        prompt: tabContent[0].result,
        max_tokens: length === "short" ? 50 : 150,
        model: "text-davinci-003",
      }, {
        headers: {
          Authorization: `Bearer YOUR_OPENAI_API_KEY`,
        },
      });

      setSummary(response.data.choices[0].text);
    } catch (error) {
      console.error("Error summarizing content:", error);
      setSummary("Failed to generate summary.");
    }
  };

  return (
    <div >
      <h3>Content Summarizer</h3>
      <label>
        Select summary length:
        <select value={length} onChange={(e) => setLength(e.target.value)}>
          <option value="short">Short</option>
          <option value="detailed">Detailed</option>
        </select>
      </label>
      <button onClick={summarizeContent}>Summarize</button>
      <div>
        <h4>Summary:</h4>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default Popup;
