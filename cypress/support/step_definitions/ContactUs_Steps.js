// Add reference types in case cy.builtin methods dont show up 
/// <reference types="cypress" />

//const { Given } = require("@badeball/cypress-cucumber-preprocessor");
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { type } from "cypress/types/jquery";



When(`user types a first name`, () => { 
    
    cy.get('[name="first_name"]').type("Selva");
})

When(`user types a last name`, () => { 

    cy.get('[name="last_name"]').type("Kuppusamy");
})

When(`user types an email address`, () => { 

    cy.get('[name="email"]').type("test@test.com"); 
})

When(`user types a comment`, () => { 

    cy.get('textarea.feedback-input').type("custom message");
    cy.get('textarea[name="message"]').type("custom message");       // Works too
})

When(`user clicks on submit button`, () => { 

    cy.get('[type="submit"]').click();
})

Then(`user should be presented with successful submission message`, () => { 

    cy.get('h1').should("have.text", "Thank You for your Message!");
    cy.get('#fountainG').should('be.visible');
})


Then(`user should be presented with unsuccessful submission message`, () => { 

    //cy.get('body').should("contain.text", "Error: all fields are required");
    cy.get('body').contains("Error: all fields are required");
})


When(`user types a specific first name {string}`, (firstName) => { 

    cy.get('[name="first_name"]').type(firstName);
})

When(`user types a specific last name {string}`, (lastName) => {

    cy.get('[name="last_name"]').type(lastName);
})

When(`user types a specific email address {string}`, (email) => {

    cy.get('[name="email"]').type(email);
})

When(`user types a specific comment {string} with number {int}`, (word, num) => {

    cy.get('textarea[name="message"]').type(word + num); 
})
