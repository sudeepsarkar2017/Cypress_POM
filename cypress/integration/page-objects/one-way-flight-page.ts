/// <reference types="cypress-xpath" />

import IndexPage from "./index-page";

/**
 * Class extends base class
 * Having all the locators present in the one way flight search page
 */

export default class OneWayFlightPage extends IndexPage {
  flexibleDatesLink = () => cy.findByText("Flexible dates");

  flexibleDatesText = () => cy.findByText("Flexible dates").should("exist");

  navigateToOnWayFlightPage = (testData: any) => {
    this.launchUrl();
    this.setFlightWay(testData.OneWay);
    this.setSource(testData.Origin);
    this.setDestination(testData.Destination);
    this.setDepartureDate();
    this.clickFindFlightButton();
    this.verifyOutboundFlightSearchResult(
      testData.Origin,
      testData.OriginCode,
      testData.Destination,
      testData.DestinationCode
    );
  };

  clickOnFlexibleDateLink = () => {
    this.flexibleDatesLink().click();
    this.waitForPageLoaderToAppear();
    this.waitForPageLoaderToDisappear();
    this.flexibleDatesText();
  };

  verifyFlightPrice = () => {
    cy.xpath("//button//div[text()='Outbound']/ancestor::button")
      .invoke("text")
      .then((str) => {
        str = str.split(" ")[1].replace(/[^\d\.]*/g, "");
        cy.log(str);
        expect(parseInt(str)).greaterThan(0);
      });
  };
}
