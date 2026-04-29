@home
Feature: Experion Technologies Home Page
  As a visitor to the Experion Technologies website
  I want to browse the home page
  So that I can learn about the company, services and latest news

  Background:
    Given I am on the Experion home page

  @smoke
  Scenario: Home page loads with correct title
    Then the page title should contain "Experion Technologies"

  @smoke
  Scenario: Experion logo is visible in the header
    Then the Experion logo should be visible in the header

  @smoke
  Scenario: Navigation menu toggle is visible
    Then the navigation menu toggle should be visible

  @regression
  Scenario: Hero section is displayed on home page
    Then the hero section should be visible on the page

  @regression
  Scenario: Years of expertise section is visible
    Then the page should display the years of expertise section

  @regression
  Scenario: Services section is present on home page
    Then the home page should display the services section

  @regression
  Scenario: Testimonials section is present on home page
    Then the home page should display the testimonials section

  @regression
  Scenario: Blog section is present on home page
    Then the home page should display the blog section

  @regression
  Scenario: Know More CTA link is present
    Then the home page should have at least one "Know More" call to action link

  @navigation
  Scenario: Clicking the logo navigates to home page
    When I click the Experion logo
    Then the URL should contain "experionglobal.com"

  @navigation
  Scenario: Contact Us link is accessible from home page
    When I click the navigation menu toggle
    Then the "Contact Us" navigation link should be visible

  @footer
  Scenario: Footer is present on home page
    Then the footer should be visible on the page

  @footer
  Scenario: Footer copyright text is visible
    Then the footer should display copyright information