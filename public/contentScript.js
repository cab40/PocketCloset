(() => {
    let currentClothing = "";

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, attributes } = obj;

        if( type === "pants") {
            currentClothing = pants;
        }

        triggerPopup();
    })

    const triggerPopup = () => {
        // pass info and trigger the popup here
    }
})