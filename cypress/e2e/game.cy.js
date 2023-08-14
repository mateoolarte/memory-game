import { data } from "../mock/data";

describe("Game", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("username", "testgame");
        win.localStorage.setItem("level", "6");
        win.localStorage.setItem("data", JSON.stringify(data));
      },
    });
  });

  it("should setup the game successfully", () => {
    cy.get("h1").contains("Memory game");
    cy.get(".username-title").contains("Hi, testgame");
    cy.get(".success-attempts").contains("Success: 0/6");
    cy.get(".errors-attempts").contains("Errors: 0");
    cy.get(".card").should("have.length", 12);
  });

  it("should allow to edit the username", () => {
    cy.get(".username-editBtn").click();
    cy.get("#username").type("updated");
    cy.get(".username-submitBtn").click();
    cy.get(".username-title").contains("Hi, testgameupdated");
  });

  it("should update the errors attempt if I chose the wrong cards", () => {
    cy.get(".card-name").contains("Bear").click({ force: true });
    cy.get(".card-name").contains("Cat").click({ force: true });
    cy.get(".errors-attempts").contains("Errors: 1");
  });

  it.only("should update the success attempt if I chose the right cards", () => {
    cy.get(".card").contains("Bear").click({ force: true });
    // cy.get(".card")
    //   .should("not.have.class", "card--active")
    //   .contains("Bear")
    //   .click({ force: true });

    cy.get(".success-attempts").contains("Success: 1/6");
  });

  it("should show a success message if the game was completed", () => {
    cy.visit("http://localhost:3000/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("username", "testgame");
        win.localStorage.setItem("level", "1");
        win.localStorage.setItem("data", JSON.stringify(data.slice(0, 1)));
      },
    });

    cy.get(".card").each(($el) => {
      cy.wrap($el).click();
    });

    cy.get(".congratulations-title").contains("¡Congratulations! testgame");
  });

  it("if the game was completed I can change the level", () => {
    cy.visit("http://localhost:3000/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("username", "testgame");
        win.localStorage.setItem("level", "1");
        win.localStorage.setItem("data", JSON.stringify(data.slice(0, 1)));
      },
    });

    cy.get(".card").each(($el) => {
      cy.wrap($el).click();
    });

    cy.get(".congratulations-title").contains("¡Congratulations! testgame");

    cy.get("#level").select("Medium");
    cy.get("button[type='submit']").click();

    cy.get(".card").should("have.length", 24);
  });
});
