var size = 0;
var placement = 'point';

var style_AP_PN = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = ""; var value = feature.get("");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.34901960784313724)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(95,215,40,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    var interval = 250;
    var geometry = feature.getGeometry();
    if (geometry.getType() === 'MultiLineString') {
      geometry.getLineStrings().forEach(function (line) {
        var length = line.getLength();
        var intervals = Math.ceil(length / (interval * resolution));
        for (let i = 1; i < intervals; ++i) { //will not place labels at the start and end of the line
     // for (let i = 0; i <= intervals; ++i) to include them	
          var point = line.getCoordinateAt(i / intervals);
          var styletext = new ol.style.Style({
            text: new ol.style.Text({
              text: labelText,
              font: labelFont,
              fill: new ol.style.Fill({
                color: labelFill
              }),
              stroke: new ol.style.Stroke({
                color: bufferColor, 
                width: bufferWidth
              }),
            })
         });
          styletext.setGeometry(new ol.geom.Point(point));
          style.push(styletext);
        }
      });
    }

    return style;
};
