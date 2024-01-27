const favicon = document.querySelector("link[rel~='icon']");
const savedTitle = localStorage.getItem("customTitle");
const savedIcon = localStorage.getItem("customIcon");

if (savedTitle) {
    if (savedTitle === "default") {
        document.title = defaultTitle;
    } else {
        document.title = savedTitle;
    }
}
if (savedIcon) {
    favicon.href = savedIcon;
}