/// <reference types="cypress" />

context("Verify for multiple todos", () => {
  beforeEach(() => {
    cy.log("=======Execution of it block starts here======");
  });

  afterEach(() => {
    cy.log("=======Execution of it block ends here======");
  });

  it("Verify create functionality of todos", () => {
    cy.get("input.new-todo")
      .clear()
      .type("Schedule appointment on Monday")
      .type("{ENTER}");
    cy.get("li:nth-child(1) > .view > label").should("have.text", "Schedule appointment on Monday");
    cy.get(".footer").should("have.text", "\n\t\t1 item left\n\t\t\n\t");
    cy.get("input.new-todo")
      .clear()
      .type("Schedule appointment on Tuesday")
      .type("{ENTER}");
    cy.get("li:nth-child(2) > .view > label").should("have.text", "Schedule appointment on Tuesday");
    cy.get(".footer").should("have.text", "\n\t\t2 items left\n\t\t\n\t");
  });

  it("Verify edit functionality of todos", () => {
    cy.get("li:nth-child(2) > .view > label").dblclick();
    cy.get("input.edit").focus().type(" 2 pm").type("{ENTER}");
    cy.get("li:nth-child(2) > .view > label").should("have.text", "Schedule appointment on Tuesday 2 pm");
    cy.get(".footer").should("have.text", "\n\t\t2 items left\n\t\t\n\t");
  });

  it("Verify complete functionality of todos", () => {
    cy.get(':nth-child(1)>.view>.toggle').check();
    cy.get(".footer").should(
      "have.text",
      "\n\t\t1 item left\n\t\tClear completed\n\t"
    );
  });

  it("Verify delete functionality of todos", () => {
    cy.get(".clear-completed").click();
    cy.get(':nth-child(2)>.view>.toggle').should("not.exist");
    cy.get(':nth-child(1)>.view>.toggle').check();
    cy.get(".clear-completed").click();
    cy.get(':nth-child(1)>.view>.toggle').should("not.exist");
  });
});
