const favicon = document.querySelector("link[rel~='icon']");
const defaultIcon = "/funi-website-2/assets/favicon.jpg";
const defaultTitle = String(document.title);
const savedTitle = localStorage.getItem("customTitle");
const savedIcon = localStorage.getItem("customIcon");
const menuButton = document.getElementById("menubutton");
const navBar = document.getElementById("navbar");


if (savedTitle) {
    if (savedTitle === "default") {
        if (defaultTitle) {
            document.title = defaultTitle
        } else {
            document.title = "funi website";
        }
    } else {
        document.title = savedTitle;
    }
}
if (savedIcon) {
    favicon.href = savedIcon;
}


let menuOpen = false;
function openMenu() {
    const navItems = navBar.getElementsByClassName("navitem");
    if (menuOpen) {
        for (let i = 1; i < navItems.length; i++) {
            navItems[i].style.display = "none";
        }
        menuOpen = false;
    } else {
        for (let i = 1; i < navItems.length; i++) {
            navItems[i].style.display = "flex";
        }
        menuOpen = true;
    }
}