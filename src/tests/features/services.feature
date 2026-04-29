@services
Feature: Experion Technologies Product Engineering Services Page
  As a visitor to the Experion Technologies website
  I want to browse the product engineering services page
  So that I can understand the services offered

  Background:
    Given I am on the Experion product engineering services page

  @smoke
  Scenario: Services page loads with correct title
    Then the page title should contain "Product Engineering Services"

  @smoke
  Scenario: Services page URL is correct
    Then the URL should contain "product-engineering-services"

  @smoke
  Scenario: Software Development service is listed
    Then the page should display "Software Development" service

  @smoke
  Scenario: Quality Engineering service is listed
    Then the page should display "Quality Engineering" service

  @regression
  Scenario: Experience Design service is listed
    Then the page should display "Experience Design" service

  @regression
  Scenario: Strategy and Consulting service is listed
    Then the page should display "Strategy and Consulting" service

  @regression
  Scenario: Operations and Support service is listed
    Then the page should display "Operations & Support" service

  @regression
  Scenario: Case studies section is present
    Then the services page should display the case studies section

  @regression
  Scenario: Page heading contains AI related content
    Then the page should contain text about "AI"

  @navigation
  Scenario: Navigation back to home from services page
    When I click the Experion logo
    Then the URL should contain "experionglobal.com"

  @footer
  Scenario: Footer is visible on services page
    Then the footer should be visible on the page