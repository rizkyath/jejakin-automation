import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  get buttonFaQ () { return $("//span[@class='board-faq board board-green']"); }
  get titleFaQ () { return $("//h2[contains(text(), 'FAQ')]"); }
  get buttonStart() { return $("//a[text()='Start' and @href='/carbon']"); }
}

export default new HomePage();
