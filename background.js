
// always waits the document to be loaded when shown
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("brutal-button").addEventListener("click", makeBrutal);
});

async function makeBrutal() {
    const [ tab ] = await chrome.tabs.query({currentWindow: true, active: true});

    chrome.scripting.insertCSS({
    target: { tabId: tab.id, allFrames: true },
    files: [ "brutal_styles.css" ],
    }).then(() => console.log("css injected"));
}