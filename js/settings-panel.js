const settingsPanel = document.getElementById("settings-panel");
const iconLinkBox = document.getElementById("iconLink");
const tabTitleBox = document.getElementById("tabTitle");
/*const favicon = document.querySelector("link[rel~='icon']");*/

const iconPresets = ["canvas.ico", "google.png", "clever.ico"];
const titlePresets = ["Dashboard", "Google", "Clever | Portal"];

let panelOpen = false;
function openSettings() {
    if (!panelOpen) {
        settingsPanel.style.display = "block";
        panelOpen = true;
    } else {
        settingsPanel.style.display = "none";
        panelOpen = false;
    }
}


function setIcon(preset) {
    if (preset === "custom") {
        const iconLink = iconLinkBox.value;
        favicon.href = iconLink;
        saveIcon(iconLink);
    } else {
        const iconLink = "/funi-website-2/assets/favicon/" + iconPresets[parseInt(preset)];
        favicon.href = iconLink;
        saveIcon(iconLink);
    }
    
}
function resetIcon() {
    favicon.href = defaultIcon;
    saveIcon(defaultIcon);
}
function saveIcon(icon) {
    localStorage.setItem("customIcon", icon);
}

function setTitle(preset) {
    if (preset === "custom") {
        const tabTitle = tabTitleBox.value;
        document.title = tabTitle;
        saveTitle(tabTitle);
    } else {
        const tabTitle = titlePresets[parseInt(preset)];
        document.title = tabTitle;
        saveTitle(tabTitle);
    }
} 
function resetTitle() {
    document.title = defaultTitle;
    saveTitle("default");
}
function saveTitle(title) {
    localStorage.setItem("customTitle", title);
}
