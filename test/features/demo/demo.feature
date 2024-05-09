Feature: Demo Feature

  @demo
  Scenario Outline: Run first demo feature
    Given Google page is opened
    When Search with <SearchItem>
    Then Click on first search result
    Then Url should match <ExpectedUrl>

    Examples:
      | TestID     | SearchItem | ExpectedUrl           |
      | DEMO_TC001 | WDIO       | https://webdriver.io/ |