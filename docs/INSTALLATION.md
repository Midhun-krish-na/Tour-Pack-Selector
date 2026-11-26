# Installation Guide

This guide explains how to install, configure, and run the Travel Explorer project locally.

## 1. Prerequisites

Before installing the project, ensure you have:

- **Node.js** — a version compatible with Vite 8
- **npm** — included with Node.js
- A code editor such as Visual Studio Code
- A terminal or command-line interface

You can verify your installations with:

```bash
node --version
npm --version
```

## 2. Extract the Project

1. Download the project package.
2. Extract the ZIP archive into a folder on your computer.
3. Open the extracted project folder in your code editor.

Ensure that the project root contains `package.json`.

## 3. Install Dependencies

Open a terminal in the project root and run:

```bash
npm ci
```

npm ci installs the exact dependency versions recorded in package-lock.json,
ensuring a reproducible installation. Use npm install only when intentionally adding or updating dependencies.

## 4. Start the Development Server

Run:

```bash
npm run dev
```

Vite will start the local development server and display a local URL in the terminal.

Open that URL in your browser to view the application.

## 5. Create a Production Build

To generate an optimised production build, run:

```bash
npm run build
```

The generated files will be placed in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## 6. Project Configuration

### Package data

Sample travel packages are stored in:

```text
src/data/packages.json
```

You can edit this file to customise the destinations and package information. Refer to the Customization Guide before changing the data structure.

### Images

The project uses image references configured in its source files and package data. Replace sample images only with images you have permission to use.

### Environment variables

The current frontend-only application does not require backend credentials or environment variables for its basic functionality.

## 7. Troubleshooting

### Dependencies fail to install

Try:

```bash
npm cache verify
npm ci
```

### Development server does not start

Check that:

- You are running commands from the project root.
- Node.js is installed and compatible with the project's Vite version.
- Dependencies have been installed successfully.

### Production build fails

Run:

```bash
npm ci
npm run build
```

Review the terminal output for the specific error.

## 8. Important Notes

- This is a frontend application.
- Booking functionality is a demonstration workflow, not a real reservation service.
- No backend server or payment gateway is included.
- Saved trips and booking records use browser local storage.
- Data stored in local storage is specific to the browser and website origin.

