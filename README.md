# Sample Angular 7 app

This is a sample angular 7 webapp with a component that lists users from jsonPlaceholder endpoint. 

The invocation to the web service is done through the users' service

# Documentation

Instead of including documentation in this readme file, I took the liberty of using compodoc

[compoc documentation](https://daniel-alonso-sanchez.github.io/angular-dalonso-test-/src/documentation/index.html)
```
npm install -g @compodoc/compodoc

```

And then, inside $project/src folder

```
compodoc -p ..\tsconfig.json -s

```

# Improvements

This is just a plain, basic example, so... lot of improvements can be included.

* adding a css library (bootstrap, material, etc)
* caching stuff for saving calls to backend
* For the sake of a wider testing coverage, the project should contain more unit test (for the custom pipe, for example) and more e2e tests


# Crud how-to

In order to add crud capabilities, some new methods should be added to UserService, in order to cover Create, Update and Delete operations. 
Also, it would be neccesary to add at least one input form, with validations, in order to capture data from the user.

# Online demo

https://angular-dalonso-test.stackblitz.io