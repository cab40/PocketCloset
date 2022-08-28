chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if(tab.url && tab.url.includes("garageclothing.com") && tab.url.includes(".html")) {
        const productID = tab.url.split("/p/")[1];
        const productAttributes = productID.split("/")[0];

        // /g/ is general
        // /p/ is product

        // pants attributes - - pant, trousers, legging
        if(productAttributes.includes("pant") || productAttributes.includes("trouser") || productAttributes.includes("legging")){
            chrome.tabs.sendMessage(tabId, {
                type: "pants",
                attributes: productAttributes
            })
        }

        // tops attributes
        
        // dresses attributes

        // shorts attributes

        // outerwear attributes

        // skirts attributes
        
    }
})
