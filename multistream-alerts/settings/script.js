const widgetContainer = document.getElementById('widgetContainer');

const settingsPageURL = '../../.utilities/settings-page-builder';

const currentURL = window.location.href;

let settingsJSON;
let baseURL = currentURL;

if (baseURL.endsWith("index.html"))
    baseURL = baseURL.replace("index.html", "");

settingsJSON = "?settingsJson=" + baseURL + "settings.json";

const lastSlashIndex = baseURL.lastIndexOf("/");
let widgetURL = "&widgetURL=" + baseURL.replace("/settings", "");

console.log("Window Ref: " + window.location.href);
console.log("Base URL: " + baseURL);
console.log("Settings JSON: " + settingsJSON);
console.log("Widget URL: " + widgetURL);

let builderPath = settingsPageURL;
if (!builderPath.endsWith('/')) builderPath += '/';
widgetContainer.src = builderPath + settingsJSON + widgetURL;
// widgetContainer.src = settingsPageURL + settingsJSON + widgetURL;
console.log(widgetContainer.src)