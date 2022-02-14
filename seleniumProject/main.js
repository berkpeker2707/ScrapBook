// Goal: Enter shipstation, press login button, enter username & password, click login button.
// Click order button, enter order id, press enter key, click check if order is tagged with IL blabla,
// If not then tag order and console log tagged order lists.

//  https://ss.shipstation.com
//  login-link
//  #username
//  #password
//  #btn-login

const { Builder, By, Key, until } = require("selenium-webdriver");
// require("chromedriver");

async function runTest() {
  let driver = await new Builder().forBrowser("chrome").build();
  //   var chromeD= new ChromeDriver();
  //   WebDriverWait wait = new WebDriverWait(chromeD, 10);

  try {
    await driver.get("https://ss.shipstation.com");
    await driver.navigate().refresh();
    await driver.wait(until.elementLocated(By.id("btn-login"), 10000));
    // await driver.manage().setTimeouts( { implicit: 10000 } );
    await driver.wait(
      until.elementLocated(By.id("btn-login")),
      30000,
      "Timed out after 30 seconds of waiting login button",
      5000
    );

    //verify title for better loading
    var title1 = await driver.getTitle();
    console.log("Title is: ", title1);
    await driver
      .findElement(By.id("username"))
      .sendKeys("*****@gmail.com", Key.ENTER);
    await driver
      .findElement(By.id("password"))
      .sendKeys("*****", Key.ENTER);
    //Wait for the login

    await driver.findElement(By.id("btn-login")).sendKeys(Key.RETURN);

    await driver.wait(
      until.elementLocated(
        By.xpath("//input[contains(@placeholder, ‘Search Orders’)]")
      ),
      30000,
      "Timed out after 30 seconds of waiting order element",
      5000
    );

    await driver.findElement(By.xpath("//input[contains(@placeholder, ‘Search Orders’)]")).sendKeys('123413', Key.ENTER);
    // let el = driver.findElement(
    //   By.css(
    //     "#order-tray > div > div > div.search-collapse-container > div > div > div.basic-search > div > input[type=text]"
    //   )
    // );
    // console.log(el); //Promise { <pending> }

    let ele = await driver.findElement(By.id("btn-login"));
    await ele.click();
  } catch (error) {
    console.log(error);
  }
  //   finally{
  //       await driver.quit();
  //   }
}

runTest();