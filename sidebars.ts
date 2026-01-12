import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creates a sidebar from the docs folder structure
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'setup',
        'login',
        'password-reset',
      ],
    },
    {
      type: 'category',
      label: 'Core Features',
      items: [
        'dashboard',
        'bookmarks',
        'folders',
        'tags',
        'shared',
      ],
    },
    {
      type: 'category',
      label: 'User Features',
      items: [
        'profile',
        'search-engine-guide',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'admin',
        'oidc-setup',
      ],
    },
  ],
};

export default sidebars;
