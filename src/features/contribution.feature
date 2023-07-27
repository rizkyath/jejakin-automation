Feature: Contribution

  @Planting
  Scenario: User can contribute planting program
    Given User accesses contribution page
    When User contribute with planting program
    Then User can see QRIS barcode

  @Adoption
  Scenario: User can contribute adoption program
    Given User accesses contribution page
    When User contribute with adoption program
    Then User can see QRIS barcode
