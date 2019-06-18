# Angular GraphQL AppSync

* App using Angular 8 with aws amplify and appsync to create a todo database. The home screen displays an aws authorization page. Once authorised the user can create todos that are listed in the UI.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* [AWS Amplify](https://aws.amazon.com/amplify/?nc1=h_ls) makes it easy to create, configure, and implement scalable mobile and web apps powered by AWS. It provides a framework to integrate the backend with iOS, Android, Web, and React Native frontends. It allows you to select the capabilities needed, a.g. authorization, analytics or offline data sync.

## Screenshots

![Example screenshot](./img/auth.png).
![Example screenshot](./img/todos.png)

## Technologies

* [Angular v8.0.0](https://angular.io/)

* [Angular CLI v8.0.1](https://cli.angular.io/).

* [RxJS Library v6.4.0](https://angular.io/guide/rx-library) used to [subscribe](http://reactivex.io/documentation/operators/subscribe.html) to the API data [observable](http://reactivex.io/documentation/observable.html).

* [aws-amplify v1.1.28](https://www.npmjs.com/package/aws-amplify) core Javascript library.

* [aws-amplify-angular v3.0.3](https://www.npmjs.com/package/aws-amplify-angular) AWS Amplify library package, with building blocks for Angular App development.

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app automatically reloads if you change any of the source files.

## Code Examples

* `todo.component.ts` extract showing asynchronous function to createa todo object.

```Typescript
async createTodo() {

  const newTodo = {
    name: 'Todo ' + Math.floor(Math.random() * 100),
    body: 'sample description',
    completed: false
  };

  const result = await this.api.CreateTodo(newTodo);

    this.allTodos.push(result);
    debugger;
}
```

## Features

* tba

## Status & To-Do List

* Status: Working aws auth works perfectly, very basic aws todo database.

* To-Do: Continue tutorial.

## Inspiration

* [AWS AppSync Tutorial - GraphQL APIs with AppSync, Amplify and Angular](https://www.youtube.com/watch?v=QEMfnr5MO1w)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
