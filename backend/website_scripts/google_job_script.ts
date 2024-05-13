import puppeteer from "puppeteer";

(
    async () => {
        // Launch the brower and open a new blank page
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null  
            });

        const page = await browser.newPage();
        // Navigate page to a URL
        await page.goto('https://www.google.com/about/careers/applications/') ;

        // Key Word To Search For
        await page.locator(".VfPpkd-fmcmS-wGMbrd ").fill('Student') ;

        await page.keyboard.press('Enter') ;

        await page.waitForNavigation() ;

        let allJobsPosted : (string| null)[] = [] ;

        while(true){
            try{

                let test= await page.waitForSelector('.lLd3Je h3') ;

                let listOfJobsInformation = await page.$$eval('.lLd3Je h3', options => {
                    return options.map(option => option.textContent);
                });
                
                
                listOfJobsInformation.forEach((eachJob) => {
                    if(eachJob != null){
                        allJobsPosted.push(eachJob) ;
                    }
                })

                const forwardButton = await page.waitForSelector('aria/Go to next page') ;

                forwardButton?.click() ;

                await page.waitForNavigation() ;
            }catch(error){
                break ;
            }
        }
    }
)() ;
