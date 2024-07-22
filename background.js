chrome.webNavigation.onCompleted.addListener((details) => {
    if (details.url.includes('youtube.com')) {
      chrome.scripting.insertCSS({
        target: { tabId: details.tabId },
        css: `
          .YtmPaidContentOverlayLink {
            color: rgb(0 0 0 / 0%);
            background-color: rgb(0 0 0 / 0%) !important;
            display: none !important;
            border-left: 0px solid;
            max-width: 0px;
          }
        `
      });
    }
  }, {url: [{hostContains: 'youtube.com'}]});
  