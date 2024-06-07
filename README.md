# Relay 42 Jonathan D Kaonga

Test case for Relay 42

## Table of Contents

- [Relay 42 Jonathan D Kaonga](#relay-42-jonathan-d-kaonga)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
  - [Project Structure](#project-structure)

## Technologies Used

`React:` A JavaScript library for building user interfaces.

`TypeScript:` A superset of JavaScript that adds static typing.

`Redux:` A predictable state container for JavaScript apps.

`Redux Toolkit:` The official, recommended way to write Redux logic.

`React Redux:` Official React bindings for Redux.

`Vite:` A fast build tool and development server.

`Tailwind CSS:` A utility-first CSS framework.

`ShadCn:` Beautifully designed components that you can copy and paste into your apps.

`PostCSS:` A tool for transforming CSS with JavaScript plugins.

## Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/jonthedev/relay-42.git
   cd relay-42
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Usage:**

   1. Start the development server

   ```bash
   npm run dev
   ```

   2. Open your browser and navigate to http://localhost:5173 to see the application running.

## Available Scripts

`npm run dev`: Starts the development server.

`npm run build`: Builds the application for production.

`npm run serve`: Serves the production build locally.

`npm run lint`: Lints the codebase using ESLint.

## Project Structure

- **README.md**: This file, containing information about the project.
- **components.json**: Configuration / metadata for Shadcn components.
- **index.html**: The main HTML file for the project.
- **package-lock.json**: Automatically generated file for locking the dependency versions.
- **package.json**: Contains project metadata and dependencies.
- **postcss.config.js**: Configuration file for PostCSS.
- **public**: Static assets that will be served directly.
  - **vite.svg**: Example SVG asset.
- **src**: Source code for the application.
  - **App.tsx**: The main App component.
  - **assets**: Folder for static assets like images and fonts.
  - **components**: Reusable components.
    - **index.ts**: Exports for components.
    - **ui**: ShadCn components are generated here when using the cli.
  - **features**: Redux slices
    - **missions**
  - **store**: Global store for application data
  - **index.css**: Global CSS file.
  - **main.tsx**: Entry point for the React application.
  - **utils**
    - **index.ts**: Exports for utility functions.
    - **shadcn-tailwind.ts**: utility functions for tailwind/shadcn
  - **vite-env.d.ts**: TypeScript types for Vite.
- **tailwind.config.js**: Configuration file for Tailwind CSS.
- **tsconfig.json**: TypeScript configuration file.
- **tsconfig.node.json**: TypeScript configuration for Node.js.
- **vite.config.ts**: Configuration file for Vite.
