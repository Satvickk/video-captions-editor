# Video Caption Editor

The Video Caption Editor is a React-based web application that allows users to upload a video URL, create captions with timestamps, and display the video with captions synchronized to the timeline. This tool simplifies the process of adding captions to hosted videos, offering a seamless and interactive experience.

## Features

- Video URL Input: Enter the URL of a hosted video to begin editing captions.
- Caption Editor: Add captions with precise timestamps for start and end times.
- Video Player: Interactive video player with play, pause, and custom caption overlay.
- Real-Time Updates: Captions are displayed dynamically as the video plays.
- Toast Notifications: User feedback for key actions (e.g., adding captions, invalid URLs).
- Formik and Yup: Enhanced form validation to ensure accurate data entry.
- Fully Responsive Design: Tailored for both desktop and mobile devices using TailwindCSS.

---

## Installation

To set up and run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/video-caption-editor.git
   cd video-caption-editor

   
2. Install dependencies:

   ```bash
   npm install

3. Run the development server:

   ```bash
   npm run dev

The application will be available at http://localhost:3000.

## Scripts

- npm run dev: Starts the development server.
- npm run build: Builds the project for production.
- npm run preview: Previews the built production files.
- npm run lint: Lints the codebase using ESLint.


# Technologies Used

## Frontend

- React: Core library for building UI components.
- Redux Toolkit: State management for handling growth data.
- Formik & Yup: Form handling and validation.
- React Toastify: Toast notifications for user interactions.

## Styling

- TailwindCSS: Utility-first CSS framework for fast styling.

# Dependencies

## Production

- @reduxjs/toolkit: For managing app state.
- formik: Simplifies form management.
- react-toastify: Adds toast notifications.
- yup: Validates form data.

## Development

- vite: Frontend tooling for faster builds.
- eslint: Code linting to ensure consistency.
- tailwindcss: Styling with utility classes.
