Feature: HomePage

  @HomeToFaq
  Scenario: User can access the features in homepage
    Given User accesses the homepage
    When User tap on FaQ button
    Then User can see FaQ page

  @HomeToFootprint
  Scenario: User can access the carbon footprint calculation page
    Given User accesses the homepage
    When User tap on start button
    Then User redirected to carbon footprint calculation page
