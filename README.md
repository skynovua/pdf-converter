# PDF Converter

This is a simple React application that allows users to convert text to PDF, styled with Tailwind CSS.

## Project Structure

- `src/`
  - `components/`
    - `TextInput.tsx`: Component for text input and conversion button
    - `PdfViewer.tsx`: Component for displaying the converted PDF
    - `ConversionHistory.tsx`: Component for displaying conversion history
  - `utils/`
    - `api.ts`: Utility functions for API calls
    - `storage.ts`: Utility functions for local storage operations
  - `App.tsx`: Main application component
  - `index.tsx`: Entry point of the application
  - `index.css`: Global styles and Tailwind directives
- `tailwind.config.js`: Tailwind CSS configuration
- `postcss.config.js`: PostCSS configuration

## Main Modules

1. **App**: The main component that orchestrates the application flow.
2. **TextInput**: Handles user input and triggers the conversion process.
3. **PdfViewer**: Displays the converted PDF using react-pdf library.
4. **ConversionHistory**: Shows the history of conversions and allows users to view past conversions.
5. **API Utilities**: Handles the communication with the PDF conversion API.
6. **Storage Utilities**: Manages saving and retrieving conversion history from local storage.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Run tests: `npm test`

## Note

Make sure to replace the `API_URL` in `src/utils/api.ts` with the actual URL of your PDF conversion API.

