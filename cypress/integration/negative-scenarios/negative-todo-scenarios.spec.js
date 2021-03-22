/// <reference types="cypress" />
import { $tp } from "../../page-elements/todos-page";

context("Negative scenarios for todos functionality", () => {
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

  it("Verify without entering any value in todos input field", () => {
    cy.get($tp.createTodo).clear().type("{ENTER}");
    cy.get($tp.firstTodoItem).should("not.exist");
    cy.get($tp.footer).should("not.exist");
  });

  it("Verify by entering space value in todos input field", () => {
    cy.get($tp.createTodo).clear().type("   ").type("{ENTER}");
    cy.get($tp.firstTodoItem).should("not.exist");
    cy.get($tp.footer).should("not.exist");
  });

  it("Verify by typing the valid data in todos input field but not pressing enter it should not be created as todo", () => {
    cy.get($tp.createTodo).clear().type(testdata.meeting1);
    cy.get($tp.firstTodoItem).should("not.exist");
    cy.get($tp.footer).should("not.exist");
  });

  it("Verify that when we uncheck a todo it is not marked as completed", () => {
    cy.get($tp.createTodo).clear().type(testdata.meeting1).type("{ENTER}");
    cy.get($tp.firstTodoItem).should("have.text", testdata.meeting1);
    cy.get($tp.footer).should("include.text", "1 item left");
    cy.get($tp.markCompleted).check();
    cy.get($tp.footer).should("include.text", "0 items left");
    cy.get($tp.clearCompleted)
      .should("be.visible")
      .and("have.text", "Clear completed");
    cy.get($tp.markCompleted).uncheck();
    cy.get($tp.firstTodoItem).should("have.text", testdata.meeting1);
    cy.get($tp.footer).should("include.text", "1 item left");
  });

  it("Verify by selecting clear completed only completed todo item should be removed", () => {
    cy.get($tp.createTodo).clear().type(testdata.meeting2).type("{ENTER}");
    cy.get($tp.markFirstTodoComplete).check();
    cy.get($tp.footer).should("include.text", "1 item left");
    cy.get($tp.clearCompleted).click();
    cy.get($tp.firstTodoItem).should("exist");
    cy.get($tp.footer).should("include.text", "1 item left");
    cy.get($tp.markFirstTodoComplete).check();
    cy.get($tp.clearCompleted).click();
    cy.get($tp.firstTodoItem).should("not.exist");
  });
});
