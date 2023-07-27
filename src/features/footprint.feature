Feature: Carbon Footprint Calculation

  @SearchAirport
  Scenario: User can search the airport departure
    Given User accesses the carbon footprint calculation page
    When User tap on choose flight route
    And User search "Melbourne" airport for departure
    Then User can see first airport item is "Melbourne International Airport"

  @Departure
  Scenario: User can choose departure and arrival airport
    Given User accesses the carbon footprint calculation page
    And User tap on choose flight route
    When User choose Bandar Soetta for departure
    And User choose Bandar Ngurah Rai for arrival
    Then User can see carbon footprint calculation

  @FlighOptions
  Scenario: User can set number of passengers
    Given User accesses the carbon footprint calculation page
    And User tap on choose flight route
    And User choose Bandar Soetta for departure
    And User choose Bandar Ngurah Rai for arrival
    When User change passenger number to "2"
    Then User can see carbon footprint calculation

  @FlighOptions
  Scenario: User can set cabin class
    Given User accesses the carbon footprint calculation page
    And User tap on choose flight route
    And User choose Bandar Soetta for departure
    And User choose Bandar Ngurah Rai for arrival
    When User change cabin class to "business"
    Then User can see carbon footprint calculation

  @TravelPurpose
  Scenario: User can change travel purpose
    Given User accesses the carbon footprint calculation page
    And User tap on choose flight route
    And User choose Bandar Soetta for departure
    And User choose Bandar Ngurah Rai for arrival
    When User change travel purpose
    Then User can see carbon footprint calculation

  @FootprintStatistics
  Scenario: User can see carbon footprint statistics
    Given User accesses the carbon footprint calculation page
    When User tap on choose flight route
    And User choose Bandar Soetta for departure
    And User choose Bandar Ngurah Rai for arrival
    And User switch pagination calculation view
    Then User can see carbon footprint statistics

  @TakeAction
  Scenario: User can take action after carbon calculation
    Given User accesses the carbon footprint calculation page
    And User tap on choose flight route
    And User choose Bandar Soetta for departure
    And User choose Bandar Ngurah Rai for arrival
    And User can see carbon footprint calculation
    When User tap on take action
    Then User can see contribution page
