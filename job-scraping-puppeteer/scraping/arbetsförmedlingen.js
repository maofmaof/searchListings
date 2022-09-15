const puppeteer = require('puppeteer');

let arbetsNuScrape = async () => {

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://arbetsformedlingen.se/platsbanken/annonser?q=it%20utvecklare');
    await page.waitFor(2000); //deprecated, whatever 

    const result = await page.evaluate(() => {

        let jobsAds1 = []
        let adDivElement = document.getElementsByClassName("header-container");
        let nextButton = document.getElementsByClassName("page-link focusable ng-star-inserted");


        for (i = 0; i < adDivElement.length; i++) {
            if (adDivElement[i].textContent.includes("Utvecklare")|| adDivElement[i].textContent.includes("Developer") || adDivElement[i].textContent.includes("utvecklare")  ) {

                let ad = {
                    title: adDivElement[i].firstElementChild.textContent,
                    link: adDivElement[i].firstElementChild.firstElementChild.href,
                    bodyText: adDivElement[i].nextElementSibling.firstElementChild.firstElementChild.textContent.trim(),
                    companyName: adDivElement[i].firstElementChild.nextElementSibling.textContent,
                    releaseDate: adDivElement[i].nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.textContent

                }

                jobsAds1.push(ad)
            }
        }
        nextButton[1].click();


        adDivElement = document.getElementsByClassName("header-container");
        nextButton = document.getElementsByClassName("page-link focusable ng-star-inserted");


        for (i = 0; i < adDivElement.length; i++) {
            if (adDivElement[i].textContent.includes("IT")) {

                let ad = {
                    title: adDivElement[i].firstElementChild.textContent,
                    link: adDivElement[i].firstElementChild.firstElementChild.href,
                    bodyText: adDivElement[i].nextElementSibling.firstElementChild.firstElementChild.textContent,
                    companyName: adDivElement[i].firstElementChild.nextElementSibling.textContent,
                    releaseDate: adDivElement[i].nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.textContent

                }
                jobsAds1.push(ad)

            }
        }

        return jobsAds1;
    }

    )
    browser.close();
    return result;
}

exports.arbetsNuScrape = arbetsNuScrape;