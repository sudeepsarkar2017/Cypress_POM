/// <reference types="cypress" />

import IndexPage from "../page-objects/index-page";
import OneWayFlightPage from "../page-objects/one-way-flight-page";
import { TestCase001 } from "../../fixtures/firstAvailableFlight.json";

const indexPage = new IndexPage();
const oneWayPage = new OneWayFlightPage();



describe('First available flight price', () => {


  xit('Verify Flight search result is appearing', () => {
   indexPage.launchUrl();
   indexPage.setFlightWay(TestCase001.OneWay);
   indexPage.setSource(TestCase001.Origin);
   indexPage.setDestination(TestCase001.Destination);
   indexPage.setDepartureDate();
   indexPage.clickFindFlightButton();
   indexPage.verifyOutboundFlightSearchResult(TestCase001.Origin,TestCase001.OriginCode,TestCase001.Destination, TestCase001.DestinationCode);
   indexPage.verifySearchResult();
  })

  it('Find First available flight price', () => {
    oneWayPage.navigateToOnWayFlightPage(TestCase001);
    oneWayPage.clickOnFlexibleDateLink();
    oneWayPage.verifyFlightPrice();
  })
})
