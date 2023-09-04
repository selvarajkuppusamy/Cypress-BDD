// Add reference types in case cy.builtin methods dont show up 
/// <reference types="cypress" />

//const { Given } = require("@badeball/cypress-cucumber-preprocessor");
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://www.webdriveruniversity.com/"

Given(`User navigates to webdriveruniversity homepage`, () => { 

    cy.visit(url);
})

When(`user clicks on contact us button`, () => { 

    // Remove target="_blank" so the page does not open in new tab
    // And then click it
    cy.get("#contact-us").invoke("removeAttr", "target").click();
})