## Description
Development and implementation of the new PayStandards design, utilizing the Next.js framework.

### Project Directory Struture
 ``` bash
├── node_modules
├── .next
├── out
├── README.md
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── assets
│   │   ├── about-us
│   │   ├── audit-product
│   │   ├── banners
│   │   ├── book-now
│   │   ├── contact
│   │   ├── demo
│   │   ├── header
│   │   ├── home
│   │   ├── icons-common
│   │   ├── leading-organizations
│   │   ├── products
│   │   ├── resources
│   │   └── security-and-privacy
│   ├── logos
│   │   ├── linkedIn-circle.svg
│   │   ├── linkedin.svg
│   │   ├── logo-dark.svg
│   │   └── logo.svg
│   ├── next.svg
│   └── vercel.svg
├── src
│   ├── app
│   │   ├── _scss
│   │   ├── about-us
│   │   ├── book-now
│   │   ├── contact-us
│   │   ├── demo
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── master-service-agreement
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── pay-audit
│   │   ├── pay-index
│   │   ├── pay-pilot
│   │   ├── privacy-policy
│   │   ├── release-notes
│   │   ├── security-privacy
│   │   └── terms-of-service
│   ├── components
│   │   ├── aboutUs
│   │   ├── audit-product
│   │   ├── contact-us
│   │   ├── demo
│   │   ├── home
│   │   ├── layout
│   │   ├── models
│   │   ├── product
│   │   ├── resources
│   │   └── securityAndPrivacy
│   ├── theme.ts
│   └── utils
│       └── jsons
├── tailwind.config.ts
└── tsconfig.json
 ```

### Key Folders and Files
- .next: This is the build directory automatically created when you run npm run build or npm run dev. It contains the compiled files for the Next.js app, such as the optimized pages and assets.
- node_modules: Contains all the installed dependencies for your Next.js project.
- Out: Contains all the static files and folder when you run npm run build. 
- next-env.d.ts: This is a environmental declaration file sent into Next.js.
- next.config.js: This is a configuration file to customize the Next.js behavior.
- package-lock.json: The lock file for project.json.
- package.json: This contains the project’s dependencies and scripts, like dev, build, and start commands.
- postcss.config.mjs: This is a configuration file to customize the PostCSS behavior.
- public: This folder stores all the  static files such as images and logos, and can store other assets that don’t need to be processed by Webpack. Files in this folder can be accessed directly in the browser.
- src: This folder contains all the codes and are organized into different sub folders which are app, components and utils. 
- app: This folder contains all the website pages built as folders. For example, when you visit https://example.com/demo, the folder that renders this page is in the demo sub-folder.
- components: This folder contains all the reusable react components. For example, the components that handles the website footer and header are placed in the layout sub folder and are AppHeader.tsx and AppFooter.tsx and these components are shared accross the website pages. 
- utils: This folder contains data that are shared and passed accross different components.
- tailwind.config.ts: This is a configuration file to customize the Tailwind behavior.
- tsconfig.json: This is a configuration file that customize the typescripts of the project.


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
To build and export the project, run:
```bash
npm run build
```

## Deployment Instruction
Continuous Integration and Continuous Deployment is setup with the help of Github Actions. When there is a push to the main branch (either through a pull request or direct push), the github action runs the process of credentials authentication, building and deployment of static files to the AWS S3 Bucket.

### Deployment Tools and Pre-Requisites
- AWS S3 Bucket: An AWS S3 bucket was created to host the static files.
- Amazon Cloudfront: Amazon CloudFront is a content delivery network (CDN) that efficiently and reliably distributes static files at high speeds across the globe.
- AWS Lambda: An AWS Lambda function was added to dynamically route the static website URLs
- AWS Policy: A new policy has been implemented to grant permissions for the S3 bucket and CloudFront. 
- IAM Role: A new role was created in AWS for GitHub Actions to deploy the static files.
- AWS Trust Relationship: A trust relationship was established to ensure that GitHub only deploys code from the main branch.

## Environment Vairables and Configuration
The following environment variables were added as Github secret keys to enable Github Actions deploy the static website files to AWS:
- AWS_REGION: The region were the AWS server of the website is located. 
- CLOUDFRONT_DISTRIBUTION_ID: The Cloudfront ID setup.
- NEXTJS_DIST: The folder where NextJS will build the static website
- S3_BUCKET: The name of the AWS S3 bucket created

## Framework and Tools
- [NextJS](https://nextjs.org/)
- [AWS S3 Bucket](https://aws.amazon.com/s3/)
- [Amazon Cloudfront](https://aws.amazon.com/cloudfront/)
- [TypeScript](https://nextjs.org/docs/app/building-your-application/configuring/typescript)
- [React Materia UI](https://mui.com/material-ui/)
- [React Swiper](https://swiperjs.com/react)

## API and Third-Party Integration
- [Hubspot:](https://www.hubspot.com/) All form submissions are sent to Hubspot
- [Calendly:](https://calendly.com/) Calendly iframe embeded for scheduling

## Coding Pattern and Style
The Container-Presentational Component pattern in NextJS was used which provides a clear separation between containers and the components

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
