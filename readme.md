# GIANT Fullscreen Button
This visual pack contain a button that can toggle full screen of a GIANT's quadrant. This code is just a snippet that you can put on your own custom visual in order the 

## Prerequisites
- GIANT Account
- Visual pack to be applied

## How To Use
- open the javascript for your visual pack;
- anywhere arter the code ```var content = quadrant.htmlJContent()``` and within the scope of ```render```, put this snippet:
```js
var maxButton = $("<div class='leesa__interaction-icon glyph glyph__maximizeScreen' />")
    .css({
        position: "absolute",
        bottom: "20px",
        right: "20px",
        height: "25px"
    });
maxButton.click(() => {
    content.appendTo("body").css({
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        "z-index": 999999
    });
    maxButton.hide();
    minButton.show();
});

var minButton = $("<div class='leesa__interaction-icon glyph glyph__minimizeScreen' />")
    .css({
        position: "fixed",
        bottom: "20px",
        right: "20px",
        height: "25px",
        "z-index": 1000000
    });
minButton.click(() => {
    content.appendTo(container).css({
        position: "",
        top: "",
        left: "",
        height: "",
        width: "",
        "z-index": ""
    });
    maxButton.show();
    minButton.hide();

});
maxButton.appendTo(content);
minButton.appendTo("body").hide();
```
- Continue your development or upload the visual pack to giant