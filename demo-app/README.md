# Demo App - GitHub Copilot Workshop

This is a demo application built with React and Vite to showcase the capabilities of GitHub Copilot. The application includes a styled navigation bar, header, sidebar, and main content area to provide a comprehensive example of how Copilot can assist in building a modern web application.

## Project Structure

```
demo-app/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── public/
├── README.md
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── assets/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── NavBar.css
│   │   ├── NavBar.tsx
│   │   ├── Sidebar.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── utils/
│   │   └── helper.ts
├── tsconfig.json
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher) or yarn (version 1.22 or higher)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/demo-app.git
cd demo-app
```

2. Install the dependencies:

```sh
npm install
# or
yarn install
```

### Running the Development Server

To start the development server, run:

```sh
npm run dev
# or
yarn dev
```

This will start the Vite development server and open the application in your default web browser.

### Building for Production

To build the application for production, run:

```sh
npm run build
# or
yarn build
```

The production-ready files will be generated in the `dist` directory.

### Previewing the Production Build

To preview the production build, run:

```sh
npm run preview
# or
yarn preview
```

This will start a local server to serve the production build.

## Project Components

### NavBar

The `NavBar` component displays a navigation bar with a welcome message and links to different sections of the application.

### Header

The `Header` component displays a header section with a welcome message.

### Sidebar

The `Sidebar` component displays a sidebar with additional content.

### Main Content

The main content area displays a welcome message and information about the GitHub Copilot workshop.

## Styling

The application uses CSS for styling. The styles are defined in the following files:

- `src/index.css`: Global styles
- `src/App.css`: Styles for the `App` component
- `src/components/NavBar.css`: Styles for the `NavBar` component

## ESLint Configuration

The project uses ESLint for linting. The configuration is defined in `eslint.config.js`.

## TypeScript Configuration

The project uses TypeScript. The configuration is defined in `tsconfig.json`.

## License

This project is licensed under the MIT License.
