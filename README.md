
# Story Squad

We deployed our project using [AWS Amplify](https://a.storysquad.dev/).

## Contributors


| [Brian Russell](https://github.com/Mr-Russell) | [Sone Thaya](https://github.com/SoneThaya) |
| :--------------------------------------------: | :----------------------------------------: | 
| [<img src="https://avatars0.githubusercontent.com/u/49926177?s=400&u=0caf0289f519b0b6c5b625899289cf59fb71849e&v=4" width = "200" />](https://github.com/Mr-Russell) | [<img src="https://avatars3.githubusercontent.com/u/17104828?s=400&u=95a7a877c29b5bcd1a7b20fb9301ca417df484e5&v=4" width = "200" />](https://github.com/SoneThaya) | 
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Mr-Russell) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/SoneThaya) |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/brian-edward-russell/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/sone-thaya/) | 

<br>
<br>



![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.13.1-blue.svg)
![Javascript](https://img.shields.io/badge/JavaScript-ES6-blue)
[![Netlify Status](https://img.shields.io/badge/AWS-Amplify-yellow)](https://a.storysquad.dev/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


## Project Overview

[Trello Board](https://trello.com/b/ZKcMrW3P/story-squad-a-jean)

[Product Canvas](https://www.notion.so/Story-Squad-Roadmap-2682f21ae48b420cbb0caafa3f500b5e)

[UX Design files](https://www.figma.com/file/WaHXdLK2NASoFWYVMZLVNt/Story_Squad?node-id=57%3A8)


Welcome to Story Squad! We are an interactive learning platform targeted at grade school children, and we help build reading comprehension as well as artistic, writing, and analytical/critical thinking skills through weekly competitions.

Each week features a new chapter in an exciting novel, written and serialized specifically for Story Squad by author and educator Graig Peterson. Children are provided with prompts based on the chapter they've just read, and participants are then divided into teams of two. Students create art and fanfiction to match the prompt, before going head to head in a bracket-style tournament.

In addition to growing their literary and artistic skills, students learn team building and critical thinking skills through a unique voting system, where each child must weight their own work against their teammate in order to increase their odds of winning. Badges and points incentivize winning and encourage participation.

Story Squad is a paid service; parents are required to create the account for their children and pay a monthly subscription fee in order for their children to compete. This brings the platform into compliance with COPPA and ensures a long future for the project.

### Key Features

- A Custom, Serialized Novel geared toward children, 8 to 12 years old
- Parental Controls which allow parents to add and customize child accounts
- Secure Payment Handling via Stripe

## Tech Stack

### Front end built using:

#### React

- First Class Performance with Virtual DOM
- Lightweight Library resulting in low bundle size/improved load times
- Easy cross-platform development via progressive web app
- Simple routing

#### Redux

- Predictable state management library
- Provides global state management, instead of passing state from parent and child components
-Easily to maintain and update if necessary

#### Okta

- Secure data management
- Third-party storage for sensitive data
- Built-in authentication

#### Ant Design

- Pre-built reusable components
- Provides great styling, saving time for other tasks
- Provides added built-in functionality

#### React-iframe NPM Package

- Displays easy to read PDFs
- Works great with images

#### React-Hook-Form NPM Package

- Built-in form data management
- Built-in error handling
- Easily adds functionality to traditional HTML forms

#### React-Responsive-Modal NPM Package

- Easy to implement pop-up style windows

#### Stripe

- Secure Payment library
- Allows us to bypass storing sensitive information

#### aws-s3

- Pre-built library specifically for making API requests to AWS S3
- Easily adds or removes files from S3 buckets
- Creates an easily maintainable folder structure for file organization

<!-- #### React-Testing-Library

- point one
- point two
- point three
- point four

#### _Front end framework goes here_

- point one
- point two
- point three
- point four -->


#### Front end deployed to `AWS Amplify`

#### [Back end](https://github.com/Lambda-School-Labs/Labs26-StorySquad-BE-TeamA) built using:

#### Express

- Built in routing and middleware
- Useful add-ons such as helmet and CORS
- Well documented

# APIs

## Okta

Third party authentication service to store sensitive data in a separate location. Once a registered user logs-in to our app, Okta sends us a secure token to use for validation across secure URL endpoints.

## AWS S3

An Amazon service for storing data externally, freeing up a lot of needed space for our backend database. We use this service to store the PDFs we need to display, as well as the image files our users upload.

## Stripe

Stripe is a RESTful API which "has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs." It was chosen for this project because of Stripe's reliability and trustworthiness in the world of online transactions, as well as the way in which the API allows us to bypass storing sensitive information.


# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  REACT_APP_CLIENT_ID - This is your Okta group ID, which can be found in the Okta Developer console
    *  REACT_APP_OKTA_ISSUER_URI - Can be found in the Okta Developer console
    *  REACT_APP_API_URI - A URL to the backend API
    *  REACT_APP_DS_API - URL to the Data Science deployed backend
    *  REACT_APP_S3_SECRET_KEY - an AWS Secret Key required to manage files stored in S3
    *  REACT_APP_S3_KEY- another AWS key required to manage files stored in S3
    *  REACT_APP_DS_TOKEN - A token which is required to make secure requests to the Data Science API


<!-- # 5️⃣ Content Licenses

🚫For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             | -->

<!-- # Testing

#### React Testing Library

-   Rendering React Components
-   Fire Events like onClick for testing user interactions -->

# Installation Instructions

Clone repo

```
git clone https://github.com/Lambda-School-Labs/Labs26-StorySquad-FE-TeamA.git

cd StorySquad-FE-TeamA
```

Install dependencies

```
npm install
```

Run the Application locally

```
npm start
```

## Other Scripts

    * build - creates a build of the application
    * test - runs tests in **tests** directory
    * eject - copy the configuration files and dependencies into the project so you have full control over them

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.


### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [API Documentation](https://github.com/Lambda-School-Labs/Labs26-StorySquad-BE-TeamA/blob/es6/documentation/APIDOCS.md) and [Database Documentation](https://github.com/Lambda-School-Labs/Labs26-StorySquad-BE-TeamA/blob/es6/documentation/DBDOCS.md) for details on the backend of our project.
