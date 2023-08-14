describe("Onboarding", () => {
  it("complete onboarding successfully", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("¡Welcome!");

    cy.get("#username").type("testuser");
    cy.get("#level").select("Easy");
    cy.get("button[type='submit']").click();

    cy.get("h1").contains("Memory game");
    cy.get(".username-title").contains("Hi, testuser");
    cy.get(".card").should("have.length", 12);
  });

  it("the username has more than 20 characters", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("¡Welcome!");

    cy.get("#username").type("testusertestusertestusertestuser");
    cy.get(".input-errorMessage").should("be.visible");
    cy.get("button[type='submit']").should("be.disabled");
  });
});
