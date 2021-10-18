# NostosTestProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Functionality Overview

The example application representing a forecast weather of 5 random cites, called Forecast Weather App.

### General Functionality

* Reading data from [Weather API](https://www.weatherapi.com/)
* Presenting data on forecast page
* Clicking on forecast weather for specific city opens a dialog with detailed forecast weather information.

### The general page breakdown looks like this:

* Home page (URL: http://localhost:4200/ )
* List of cities read from NgRX which are stored in a bit specific way.
Result from the API returns one city only, so I choose solution to loop each city and to put result in Behaviour Subject,
and after that through effect to load them into the store and display on app page.

* Click on each city opens Dialog with detailed data provided with @Inject() decorator.

