var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'firefox' } };
var client = webdriverio.remote(options);

client
    .init()
    .url('https://internet.frontier.com/plans-pricing.html')
    
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);  
    })
    .getUrl().then(function(url) {
        console.log(url); 
    })
    // .submitForm().then(function() {
    //     console.log(id);
    // })

    .getText("//ul[@class='nav-legal__links']/li[1]/a").then(function (link) {
        console.log('Link found: ' + link);
        (link).should.equal("Privacy Policy");
    })
    .getAttribute("//ul[@class='nav-legal__links']/li[1]/a", "href").then(function (link) {
        (link).should.equal("https://internet.frontier.com/privacy.html");
        console.log('URL found: ' + link);
    })

.end();


