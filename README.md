## Description
PayStandards 

## Installation Instruction

### System Requirements
Before setting up this project on your local or development environment, ensure you have the following installed:
- Node: version 18.18 or later
- macOS, Windows (including WSL), and Linux are supported.

### Development Tools
- Git: Have git installed
- An Integrated Development Environment (IDE) or Code Editor Installed. Preferably use [Visual Studio Code.](https://code.visualstudio.com/) 
- Prettier: The prettierrc.json is configured and added to the root directory. Ensure you have [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [Prettier ESLink](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) Extension installed on your code editor (or IDE). 
- MacOS Terminal or Windows Command Line Tool

### Installation
Kindly follow the steps below to install and setup the project on your local or a development environment.

Clone the repository using your terminal by running:

``` bash
git clone git@github.com:PayStandards/pay-standards-v2.git
```
Enter into the cloned directory by running:
```bash
cd pay-standards-v2
```
Install the node packages and dependencies by running:
```bash
npm install
```
Run the development server:
```bash
npm run dev
```
To build the project, run:
```bash
npm run build
```
To export the project to AWS s3 bucket, run:
```bash
npm run export
```


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
