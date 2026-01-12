# SlugBase Documentation

This is the documentation site for SlugBase, built with [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Building for Production

To create a production build:

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Serving the Production Build

To preview the production build locally:

```bash
npm run serve
```

## Project Structure

```
slugbase-docs/
├── docs/                    # Documentation markdown files
│   ├── intro.md            # Introduction page
│   ├── Setup.md            # Setup documentation
│   ├── Login.md            # Login documentation
│   └── ...                 # Other documentation files
├── src/
│   ├── css/
│   │   └── custom.css      # Custom styles
│   └── pages/
│       └── index.tsx        # Homepage
├── static/                 # Static assets (images, etc.)
├── docusaurus.config.ts    # Docusaurus configuration
├── sidebars.ts            # Sidebar configuration
└── package.json           # Project dependencies
```

## Documentation Structure

The documentation is organized into the following sections:

- **Introduction** - Overview of SlugBase
- **Getting Started** - Setup, Login, Password Reset
- **Core Features** - Dashboard, Bookmarks, Folders, Tags, Shared
- **User Features** - Profile, Search Engine Guide
- **Administration** - Admin Page, OIDC Setup

## Adding New Documentation

1. Create a new markdown file in the `docs/` directory
2. Add frontmatter with `id`, `title`, and `sidebar_position`:
```markdown
---
id: my-new-page
title: My New Page
sidebar_position: 10
---

# My New Page

Content here...
```

3. Add the page to `sidebars.ts` in the appropriate category

## Customization

- **Theme**: Edit `src/css/custom.css` to customize colors and styles
- **Homepage**: Edit `src/pages/index.tsx` to modify the homepage
- **Configuration**: Edit `docusaurus.config.ts` for site-wide settings
- **Sidebar**: Edit `sidebars.ts` to reorganize the documentation structure

## Docker

### Building the Docker Image

Build the Docker image locally:

```bash
docker build -t slugbase-docs .
```

### Running the Container

Run the container locally:

```bash
docker run -p 8080:80 slugbase-docs
```

The documentation site will be available at `http://localhost:8080`.

### Publishing to GitHub Container Registry

The project includes a GitHub Actions workflow that automatically builds and publishes the Docker image to GitHub Container Registry (ghcr.io) on:

- Push to `main` or `master` branch
- Push of version tags (e.g., `v1.0.0`)
- Manual workflow dispatch

#### Pulling the Image

After publishing, you can pull the image:

```bash
docker pull ghcr.io/<your-username>/slugbase-docs:latest
```

Replace `<your-username>` with your GitHub username or organization name.

#### Using the Published Image

```bash
docker run -p 8080:80 ghcr.io/<your-username>/slugbase-docs:latest
```

## Deployment

The site can be deployed to various platforms:

- **Docker**: Build and run the Docker container (see Docker section above)
- **GitHub Container Registry**: Automatically published via GitHub Actions
- **GitHub Pages**: Use the `deploy` script after configuring `docusaurus.config.ts`
- **Netlify**: Connect your repository and build with `npm run build`
- **Vercel**: Connect your repository and build with `npm run build`
- **Any static host**: Upload the `build` directory after running `npm run build`

## Learn More

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Docusaurus Tutorial](https://docusaurus.io/docs/tutorial/intro)
