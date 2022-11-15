# TODO | Frontend

![image](https://user-images.githubusercontent.com/40045069/198158621-1cb2c15d-a111-4d89-9593-cd87556c236e.png)

This is a simple TODO app made with:

* Angular 13
* UIKit
* NgRx

## Subjects

This application covers all this topics:

* Granularize the application by components;
* Modularization of the components;
* Consume data from an API (a fake one in this case);
* Asynchronous and reactive programming;
* Using stores and reducers to communicate between components;

## Setup

You can run the application only with Docker installed on your machine with the command:

```bash
docker-compose up -d
```

Or, if you want to improve and develop, you are going to need installed:

* [Node 16+](https://nodejs.org/en/)
* [Angular CLI 13.2.6](https://www.npmjs.com/package/@angular/cli)
* [Json server](https://www.npmjs.com/package/json-server)

>Note: The application runs with a fake backend (json-server), is a tool that easily helps you
>to simulate REST API calls.

After you install all these dependencies, you can run the application by:

```bash
npm install
npm run dev
```
