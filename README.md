# zivver-automation-assignmnet
Cypress is an open source testing utility for nodejs. It makes it possible to write super easy selenium tests with Javascript in your favorite BDD or TDD test framework.Cucumber is a software tool that supports behavior-driven development (BDD). ... It is often used for testing other software. It runs automated acceptance tests written in a behavior-driven development (BDD) style.

## Assignment information


## Initial framework setup
- For initial setup of webdriverio-cucumber framework followed webdriverio documentation( https://webdriver.io/docs/gettingstarted and https://webdriver.io/docs/frameworks/#using-cucumber)
- For CI/CD setup followed GitLab CI/CD documentation (https://docs.gitlab.com/ee/ci/quick_start/)
- For reports used HTML Reporter and Allure Reporter - Webdriverio and followed the documentation (https://webdriver.io/docs/rpii-wdio-html-reporter/)
- Browser info : Currently tests are configured run only on google chrome as per wdio.conf.js. We can add firefox browser by editing capabilities in wdio.conf.js
- CI/CD info : Currently configured to run tests in GitLab CI/CD and these configuration can be viewed in ".gitlab-ci.yml" file
- TestData is added to test data folder in the form of json files.

## To install and run tests

First clone the repository and run below commands:

```console
npm install 
```
To run all the tests
```console
npm run test
```
To run specific feature file tests
```console
npm run test --spec ./features/filter.feature
```

## To view html reports
- After running tests verify `reports/html-reports/master-report.html` file.
- After job has completed download the artifacts and unzip the file. Open `reports/html-reports/master-report.html` for the html reporter automation report and open `allure-report/index.html` for allure reporter automation report

## To write new tests

### Prerequisites - knowledge of Javascript, Cypress and Node.js

- Add new tests under `Integration` folder 
- Add page elements and functions related to specific pages to file under `pageobjects` folder
- Add test data to file under `testdata` folder in json format






