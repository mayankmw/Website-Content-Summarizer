
# Website Content Summarizer

This is a Chrome extension that uses AI to summarize the content of any webpage. It fetches the webpage's content and generates a concise summary using the Gemini 1.5 API.

## Features

- Extracts content from the currently active webpage.
- Uses the Gemini 1.5 model to generate bullet-point summaries.
- Intuitive UI for quick summarization.

---

## Setup Instructions

### Prerequisites

1. Install **Node.js** (version 14 or later) from [Node.js](https://nodejs.org/).
2. Install **npm** (comes with Node.js).
3. Gemini API Key (Get an API key for your account from Google AI Studio).

---

### Steps to Run

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:

   ```env
   REACT_APP_GOOGLE_API_KEY=your_google_api_key
   ```

   - Replace `your_google_api_key` with your Gemini 1.5 API key.

4. Build the extension:

   ```bash
   npm run build
   ```

5. Load the extension in Chrome:
   - Open `chrome://extensions/` in your Chrome browser.
   - Enable **Developer mode** (toggle in the top-right corner).
   - Click **Load unpacked** and select the `build` folder in your project directory.

6. Start summarizing!

---

## Usage

1. Navigate to any webpage.
2. Click on the Website Content Summarizer extension icon in the Chrome toolbar.
3. Click the "Summarize" button to generate a summary of the webpage's content.
4. View the generated summary in the extension's popup.

---

## Future Updates

I plan to introduce the following features in upcoming versions:

1. Customize summary Feature:
   - Users can adjust the summary by selecting a different length or focus (e.g., bullet points, concise summary, or detailed overview).
2. Ask Questions from the Webpage Content
   - Users can ask specific questions about the content of the webpage and get AI-generated answers in real-time.
3. Dark Mode
   - Allow users to switch between light and dark mode.

---

## Project Structure

- **src/**: Contains the React source code for the extension.
- **public/**: Contains the manifest file and assets (icons).
- **build/**: Generated output folder after running `npm run build`.

---

## Icon Requirements

- Dimensions: 128x128, 48x48, and 16x16 pixels.
- File Format: `.png`.
- Add icons to the `public/` folder and reference them in `manifest.json`.

---

## Technologies Used

- **React.js**: For building the user interface.
- **Axios**: For API calls to the Gemini 1.5 API.
- **Gemini 1.5 API**: For generating content summaries.

---

## License

This project is licensed under the MIT License.

---

## Troubleshooting

- If the content isn't fetched properly, ensure you have enabled permissions for the extension to access webpage content.
- For issues with the Gemini API, verify your API key and quota limits.

---

## Contributing

Contributions are welcome! If you find a bug or have a feature request, feel free to open an issue or submit a pull request.

---

For any questions or support, please contact wadhwa.mayankreal9149@gmail.com
