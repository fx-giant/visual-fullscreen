namespace("leesa.visual")["buttonFullScreen"] = (function (leesa, _, d3) {
  var magicalChart = {
    extend: function (quadrant) {},
    render: function (quadrant, callback) {
      var fullScreen = false;
      var content = quadrant.htmlJContent();
      var container = content.parent();
      var body = $("body");
      content.html("");
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
    },
    configuration: {},
  }
  return magicalChart;
})(leesa, _, d3)