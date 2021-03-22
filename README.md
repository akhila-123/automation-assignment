# automation-assignmnet-with-cypress
Cypress is a next generation front end testing tool built for the modern web. Cypress enables to write all types of tests like end-to-end tests, integration tests and unit tests. Some important features of cypress are time travel, debuggability, automatin waiting, network traffic control etc which helps to remove flakiness in tests.

## Assignment information
Automate the tests related to to-dos functionality on [lightweight to-do list webapp](https://todomvc.com/examples/angular2/).

Positive scenarios are covered in `cypress/integration/positive-scenarios/positive-todo-scenarios.spec.js` file. Below is brief description of those test cases.
1. Verify create functionality of todos by creating a new todo item.
2. Verify edit functionality of todos item by editing already created todo item.
3. Verify mark completed functionality of todos by marking an already created todo item as completed.
4. Verify by clicking clear completed all the todos which are marked as completed are removed.
5. Verify that user is able to create multiple todo items.
6. Verify that user can click on X and delete a todo item.

Negative scenarios are covered in `cypress/integration/negative-scenarios/negative-todo-scenarios.spec.js` file. Below is brief description of those test cases.
1. Verify that without entering any value in todos input field and clicking enter. A new todo item should not be created.
2. Verify that by entering only space value in todos input field and clicking enter. A new todo item should not be created.
3. Verify by entering the valid data in todos input field but not pressing enter it should not be created as todo item.
4. Verify that when we check and immediately uncheck a todo it is not marked as completed.
5. Verify by clicking clear completed only completed todo item should be removed.

## Framework information
Seperated test data and page elements/selectors from the tests. To avoid making changes in tests whenever we have any changes related to them.
Test data - Test data is seperated and stored under `cypress/fixtures` folder
Page Elements - Page elements/selectors are seperated and stored under `cypress/page-elements` folder 


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

## To view html reports and videos
- After running tests and running generate-reports command. Verify `cypress/reports/html/report.html` file for html report and `cypress/reports/html/videos/specs.*.mp4` for video recordings.

## To write new tests

### Prerequisites - knowledge of Javascript, Cypress and Node.js

- Add new tests under `Integration` folder 
- Add test data under `fixtures` folder in json format
- Add page elements under `todos-page` folder






