/// <reference types="cypress" />

context("Verify for single todo", () => {
  beforeEach(() => {
    cy.log("=======Execution of it block starts here======");
  });

  afterEach(() => {
    cy.log("=======Execution of it block ends here======");
  });

  it("Verify create functionality", () => {
    cy.get("input")
      .clear()
      .type("Schedule appointment on Monday")
      .type("{ENTER}");
    cy.get("label").should("have.text", "Schedule appointment on Monday");
    cy.get(".footer").should("have.text", "\n\t\t1 item left\n\t\t\n\t");
  });

  it("Verify edit functionality", () => {
    cy.get("label").dblclick();
    cy.get("input.edit").focus().type(" 2 pm").type("{ENTER}");
    cy.get("label").should("have.text", "Schedule appointment on Monday 2 pm");
    cy.get(".footer").should("have.text", "\n\t\t1 item left\n\t\t\n\t");
  });

  it("Verify complete functionality", () => {
    cy.get('input.toggle[type="checkbox"]').check();
    cy.get(".footer").should(
      "have.text",
      "\n\t\t0 items left\n\t\tClear completed\n\t"
    );
    cy.get(".clear-completed")
      .should("be.visible")
      .and("have.text", "Clear completed");
  });

  it("Verify delete functionality", () => {
    cy.get(".clear-completed").click();
    cy.get('input.toggle[type="checkbox"]').should("not.exist");
  });
});
