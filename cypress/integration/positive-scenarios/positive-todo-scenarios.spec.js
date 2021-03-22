/// <reference types="cypress" />
import { $tp } from "../../page-elements/todos-page";

describe("Verify all functionalities of todos page", () => {
  let testdata;
  beforeEach(() => {
    cy.log("=======Execution of it block starts here======");
    cy.fixture("test-data.json").then((data) => {
      testdata = data;
    });
  });

  afterEach(() => {
    cy.log("=======Execution of it block ends here======");
  });

  it("Verify create functionality of todos", () => {
    cy.get($tp.createTodo).clear().type(testdata.meeting1).type("{ENTER}");
    cy.get($tp.firstTodoItem).should("have.text", testdata.meeting1);
    cy.get($tp.footer).should("include.text", "1 item left");
  });

  it("Verify edit functionality of todos", () => {
    cy.get($tp.firstTodoItem).dblclick();
    cy.get($tp.editTodo).focus().type(testdata.editText).type("{ENTER}");
    cy.get($tp.firstTodoItem).should(
      "have.text",
      `${testdata.meeting1}${testdata.editText}`
    );
    cy.get($tp.footer).should("include.text", "1 item left");
  });

  it("Verify complete functionality of todos", () => {
    cy.get($tp.markCompleted).check();
    cy.get($tp.footer).should("include.text", "0 items left");
    cy.get($tp.clearCompleted)
      .should("be.visible")
      .and("have.text", "Clear completed");
  });

  it("Verify clear completed functionality of todos", () => {
    cy.get($tp.clearCompleted).click();
    cy.get($tp.markCompleted).should("not.exist");
  });

  it("Verify create functionality for multiple todos", () => {
    cy.get($tp.createTodo).clear().type(testdata.meeting1).type("{ENTER}");
    cy.get($tp.firstTodoItem).should("have.text", testdata.meeting1);
    cy.get($tp.footer).should("include.text", "1 item left");
    cy.get($tp.createTodo).clear().type(testdata.meeting2).type("{ENTER}");
    cy.get($tp.secondTodoItem).should("have.text", testdata.meeting2);
    cy.get($tp.footer).should("include.text", "2 items left");
  });

  it("Verify delete functionality of todos", () => {
    cy.get($tp.deleteFirstTodo).click({ force: true });
    cy.get($tp.footer).should("include.text", "1 item left");
    cy.get($tp.deleteFirstTodo).click({ force: true });
    cy.get($tp.footer).should("not.exist");
  });
});
