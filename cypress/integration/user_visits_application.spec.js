describe("user visits the application", () => {
  before(() => {
    cy.intercept("GET", "*/users**", { fixture: "users.json" });
    cy.visit("/");
  });
  it("is expected to display title", () => {
    cy.get("#header").should("contain.text", "Employee List");
  });

  it("is expected to display 4 employees", () => {
    cy.get("#employee-list").children().should("have.length", 4);
  });

  it("is expected that the list items display the expected content", () => {
    cy.get("#employee-list")
      .children()
      .first()
      .find(".name")
      .should("contain", "George Bluth");
  });

  it("is expected list items to display an image", () => {
    cy.get("#employee-list").within(() => {
      cy.get(".employee-item").first().find(".avatar").should("be.visible");
    });
  });
});
