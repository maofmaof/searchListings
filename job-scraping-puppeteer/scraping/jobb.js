const puppeteer = require('puppeteer');

let jobbNuScrape = async () => {

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.jobb.nu/uppsala/datait');
  await page.waitFor(2000);

  const result = await page.evaluate(() => {

    let jobAds = [];
    let adTitleElement = document.getElementsByClassName("uk-text-primary");

    let today = new Date();

    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, 0);

    let todayDate = dd + '/' + mm;

    for (i = 0; i < adTitleElement.length; i++) {
      if (adTitleElement[i].textContent.includes("Utvecklare") || adTitleElement[i].textContent.includes("Developer") || adTitleElement[i].textContent.includes("utvecklare")) {

        let ad = {

          title: adTitleElement[i].textContent,
          link: adTitleElement[i].parentNode.href,
          companyName: adTitleElement[i].nextElementSibling.firstElementChild.innerHTML.trim(),
          bodyText: adTitleElement[i].nextElementSibling.nextElementSibling.innerHTML.trim(),
          releaseDate: adTitleElement[i].nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.innerHTML.trim()

        }
        if (adTitleElement[i].nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.innerHTML.trim().includes('Idag')) {
          ad.releaseDate = "Datum: " + todayDate
        }
        jobAds.push(ad)
      }
    }
    return jobAds;
  })

  browser.close();
  return result;
}


exports.jobbNuScrape = jobbNuScrape;
