import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FootprintPage extends Page {
  get titlePage() { return $("//h3[text()='Lets Calculate Your Carbon Footprint']"); }
  get popupTitleDeparture() { return $("//h2[text()='departure']"); }
  get popupTitleArrival() { return $("//h2[text()='arrival']"); }
  get buttonEditFlight() { return $("//span[contains(@class, 'board-departure')]"); }
  get buttonEditPassenger() { return $("//span[contains(@class, 'board-passenger')]"); }
  get buttonEditTravelPurpose() { return $("//span[contains(@class, 'board-purpose')]"); }
  get searchBarAirport() { return $("//input[@placeholder='Search airport']"); }
  get buttonSearch() { return $("//span[@class='Form_icon__HNX_c']"); }
  get buttonTakeAction() { return $("//button[text()='Take Action']"); }

  //Calculation
  get titleFootprintCalculation() { return $("//h3[text()='Your carbon footprint']"); }
  get switchPaginationCalculation() { return $("//span[@class='swiper-pagination-bullet']"); }
  get footprintFlight() { return $("//div[text()='Flight']"); }
  get footprintHotel() { return $("//div[text()='Hotel']"); }
  get footprintTransportation() { return $("//div[text()='Transportation']"); }
  get classEconomy() { return $("//div[text()='Economy']"); }
  get classBusiness() { return $("//div[text()='Business']"); }
  get firstClass() { return $("//div[text()='First Class']"); }
  get passengerNumber() { return $("//input[@id='inputpassenger']"); }
  get buttonSavePassenger() { return $("//button[text()='Save']"); }
  get purposeBusinessTrip() {return $("//h3[text()='Business trip']"); }

  // Airports
  get firstItemAirport() { return $("//div[@class='th-list'][1]/div/div"); }
  get soetta() { return $("//div[text()='Bandar Udara Internasional Soekarno Hatta']"); }
  get ngurahRai() { return $("//div[text()='Bandar Udara Internasional Ngurah Rai']"); }
}

export default new FootprintPage();
