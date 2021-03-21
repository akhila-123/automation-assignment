# zivver-automation-assignmnet-with-cypress
Cypress is a next generation front end testing tool built for the modern web. Cypress enables to write all types of tests like end-to-end tests, integration tests and unit tests. Some important features of cypress are time travel, debuggability, automatin waiting, network traffic control etc which helps to remove flakiness in tests.

## Assignment information
Automate the tests related to to-dos functionality on [lightweight to-do list webapp](https://todomvc.com/examples/angular2/).
Four positive scenarios
Four negative scenarios


## To install and run tests

First clone the repository and run below commands:

```console
npm install 
```
To run all the tests
```console
npm run test
```
To run specific spec file
```console
npx cypress run  --browser chrome --spec cypress/integration/specs/test-one-todo.spec.js
```
To generate report
```console
npm run combine-reports && npm run generate-reports
```

## To view html reports
- After running tests and running generate-reports command.verify `cypress/reports/html/report.html` file.
- After job has completed download the artifacts and unzip the file. Open `cypress/reports/html/report.html` for the html automation report and open `cypress/reports/html/videos/specs.*.mp4` for video recording

## To write new tests

### Prerequisites - knowledge of Javascript, Cypress and Node.js

- Add new tests under `Integration` folder 
- Add test data under `fixtures` folder in json format






