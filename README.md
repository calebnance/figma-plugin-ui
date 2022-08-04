# Figma Plugin UI

## Table of Contents

- [Install & Build](#install--build)
- [Linting](#linting)
- [Release Notes](#release-notes)

## Install & Build

First, make sure you have [Node.js](https://nodejs.org) installed on your machine.

_if you use nvm_, `nvm use` to switch to 16.13.1

**Install:**

```bash
npm i
```

**Run Package with Hot-reload:**

```bash
npm run dev
```

***use this with react app within `/example/` for full hot-reloading dev***

**Run Package Bundle:**

```bash
npm run build
```

## Linting

- `npm run lint` for a list of linting warnings/error in cli
- make sure you have prettier package installed:
  - [prettier for atom](https://atom.io/packages/prettier-atom)
  - [prettier for vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - automatic format on save (toggle format on save)

## Release Notes

TODO
