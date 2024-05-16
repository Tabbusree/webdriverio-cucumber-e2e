Feature: Advanced WebPage Interactions

  @advancedweb
  Scenario Outline: Demo Advanced WebPage Interactions
    Given Login to inventory web application
    # Then Inventory page should list <NumberOfProducts>
    # Then Validate all products have valid price 

    Examples:
      | TestID             | NumberOfProducts |
      | ADVANCED_WEB_TC003 |                6 |
