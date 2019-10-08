var changeHeader = (n) => {
    document.getElementById("stylesheetNice").attributes.href.nodeValue = "stylesheets/headerV" + n + ".css";
/*
    document.children[0].children[0].children[5].attributes.href.nodeValue = "stylesheets/headerV" + n + ".css";
*/
}
var changeColorTheme = (n) => {
    /*
    document.children[0].children[0].children[6].attributes.href.nodeValue = "stylesheets/colorThemes/ThemeV"+ n + ".css";
    */
    var compare = window.getComputedStyle(document.children[0]).getPropertyValue("background-color"), compareRight=false;
    document.getElementById("stylesheetColor").attributes.href.nodeValue = "stylesheets/colorThemes/ThemeV"+ n + ".css";
}
var toggleCredits = (n) => {
    switch (n) {case "close": n="open";break;case "open": n="close"};
    document.getElementsByClassName("debug")[0].attributes.onclick.nodeValue="toggleCredits('"+n+"')";
    document.getElementById("credits").attributes.class.nodeValue="credits "+n+"";
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var changeThemeColor = () => {
    console.log(window.getComputedStyle(document.children[0]).getPropertyValue("background-color"));
    setTimeout(changeThemeColor12, 1000)
}
var changeThemeColor12 = () => {
    document.getElementsByName("theme-color")[0].attributes.content.nodeValue=window.getComputedStyle(document.children[0]).getPropertyValue("background-color");
}
/*
var changeThemeColor = () => {
    console.log("initializing...")
    while (true) {
        setTimeout(changeThemeColor1, 1000);
    }
}
*/
var changeThemeColor1 = () => {
    var c = getRandomColor();
    document.getElementsByName("theme-color")[0].attributes.content.nodeValue = c;
    console.log(c);
}
var changeThemeColorBg = () => {
    while (true) {
        setTimeout(changeThemeColorBg1, 1000)
    }
}
var changeThemeColorBg1 = () => {
    document.children[0].style.backgroundColor = getRandomColor();
}
var change = (n) => {
    document.getElementById("active").removeAttribute("id");
    document.getElementsByClassName("navigation")[0].children[0].children[n].setAttribute("id", "active")
};
