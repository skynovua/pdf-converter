# PDF Converter

This is a simple React application that allows users to convert text to PDF, styled with Tailwind CSS.

## Project Structure

- `src/`
  - `__tests__/`
    - `api.test.ts`: Tests for API utility functions
    - `App.test.tsx`: Tests for the main application component
  - `components/`
    - `ui/`- Shadcn UI components
    - `create-pdf-form.tsx`: Component for text input and conversion button
    - `pdf-viewer.tsx`: Component for displaying the converted PDF
    - `conversion-history.tsx`: Component for displaying conversion history
  - `utils/`
    - `api.ts`: Utility functions for API calls
    - `storage.ts`: Utility functions for local storage operations
    - `file.ts`: Utility functions for file operations
  - `types/`
    - `types.ts`: Type definitions
  - `App.tsx`: Main application component
  - `main.tsx`: Entry point of the application
  - `index.css`: Global styles and Tailwind directives

## Main Modules

1. **App**: The main component that orchestrates the application flow.
2. **CreatePdfForm**: Handles user input and triggers the conversion process.
3. **PdfViewer**: Displays the converted PDF using react-pdf library.
4. **ConversionHistory**: Shows the history of conversions and allows users to view past conversions.
5. **API Utilities**: Handles the communication with the PDF conversion API.
6. **Storage Utilities**: Manages saving and retrieving conversion history from local storage.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Run tests: `npm test`

## Features

- Convert text to PDF
- View converted PDF
- View conversion history
- Download PDF
- Responsive design
