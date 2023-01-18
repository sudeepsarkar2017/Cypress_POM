/// <reference types="cypress-xpath" />

/**
 * Base Class contains all the locators and function that are present on index page.
 */

export default class IndexPage {
  getFlightWayDropdown = () =>
    cy.get(".form-control[title='One way'], .form-control[title='Round trip']");

  getOriginAirport = () => cy.get(".route-selection-origin  .ellipsis");

  getDestinationAirport = () =>
    cy.get(".route-selection-destination  .ellipsis");

  getAirportTextBox = () => cy.get("input[placeholder='Search airport']");

  getTodaysDateFromDatePicker = () =>
    cy.get("div[class='DayPicker-Day DayPicker-Day--today']");

  getTomorrowDateFromDatePicker = () =>
    cy.xpath(
      "//div[contains(@class,'DayPicker-Day--today')]/following-sibling::div"
    );

  getDepartureDateTextBox = () => cy.get("input[name='DepartureDate1']");

  waitForDatePickerLoader = () =>
    cy.get("div[class='loader ']  .spinner").should("not.exist");

  getFindFlightButton = () => cy.findByText("Find flights");

  waitForPageLoaderToDisappear = () =>
    cy.get("div[class*='Spinner']").should("not.exist");

  waitForPageLoaderToAppear = () =>
    cy.get("div[class*='Spinner']").should("exist");

  verifySearchResult = () =>
    cy
      .xpath("//div[text()='Direct flights']/../following-sibling::div")
      .should("exist");

  launchUrl = () => cy.visit("/");

  setFlightWay = (flightWay: string) => {
    this.getFlightWayDropdown().click();
    cy.findByText(flightWay).click();
  };

  setSource = (source: string) => {
    this.getOriginAirport().click();
    this.getAirportTextBox().type(source);
    cy.findByText(source).click();
  };

  setDestination = (destination: string) => {
    this.getDestinationAirport().click();
    this.getAirportTextBox().type(destination);
    cy.findByText(destination).click();
  };

  setDepartureDate = () => {
    this.getDepartureDateTextBox().click();
    this.waitForDatePickerLoader();
    this.getTodaysDateFromDatePicker().click();
    // this.getTomorrowDateFromDatePicker().first().click();
  };

  clickFindFlightButton = () => {
    this.getFindFlightButton().click();
    this.waitForPageLoaderToDisappear();
  };

  verifyOutboundFlightSearchResult = (
    origin: string,
    originCode: string,
    destination: string,
    destinationCode: string
  ) => {
    cy.xpath("//div[h4[text()='Outbound Flight']]").should(
      "have.text",
      `Outbound Flight${origin}(${originCode})to${destination}(${destinationCode})`
    ); //'Outbound FlightVienna International(VIE)toMalta International Airport(MLA)')//`Outbound Flight${origin}(${originCode})to${destination}(${destinationCode})`)
  };
}
