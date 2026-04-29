@contact
Feature: Experion Technologies Contact Us Page
  As a visitor to the Experion Technologies website
  I want to browse the contact page
  So that I can find contact information and office locations

  Background:
    Given I am on the Experion contact us page

  @smoke
  Scenario: Contact page loads with correct title
    Then the page title should contain "Contact"

  @smoke
  Scenario: Contact page URL is correct
    Then the URL should contain "contact-us"

  @smoke
  Scenario: Help text is visible on contact page
    Then the page should display "What can we help you with" text

  @smoke
  Scenario: General contact option is visible
    Then the contact page should display the "General" contact option

  @smoke
  Scenario: Sales contact option is visible
    Then the contact page should display the "Sales" contact option

  @smoke
  Scenario: Careers contact option is visible
    Then the contact page should display the "Careers" contact option

  @regression
  Scenario: General enquiry email is displayed
    Then the contact page should display email "info@experionglobal.com"

  @regression
  Scenario: Sales email is displayed
    Then the contact page should display email "sales@experionglobal.com"

  @regression
  Scenario: Careers email is displayed
    Then the contact page should display email "careers@experionglobal.com"

  @regression
  Scenario: USA office location is displayed
    Then the contact page should display office location for "USA"

  @regression
  Scenario: India office location is displayed
    Then the contact page should display office location for "India"

  @regression
  Scenario: UK office location is displayed
    Then the contact page should display office location for "UK"

  @regression
  Scenario: Australia office location is displayed
    Then the contact page should display office location for "Australia"

  @regression
  Scenario: Multiple office locations are listed
    Then the contact page should display more than 3 office locations

  @navigation
  Scenario: Clicking logo navigates back to home
    When I click the Experion logo
    Then the URL should contain "experionglobal.com"

  @footer
  Scenario: Footer is visible on contact page
    Then the footer should be visible on the page