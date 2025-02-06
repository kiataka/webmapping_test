var size = 0;
var placement = 'point';

var style_Hotspot = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = ""; 
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    // Check if the feature is a cluster
    var clusteredFeatures = feature.get("features");	
    var feature
    var value
    // Checks if clusteredFeatures is defined and if it is an array
    if (Array.isArray(clusteredFeatures)) {
        size = clusteredFeatures.length;
        feature = clusteredFeatures[0];
        value = clusteredFeatures[0].get("");
    } else {
        feature = feature
        value = feature.get("");
    }
    if ("" !== null) {
        labelText = String("");
    }    
    var style = [
                 new ol.style.Style({
                  image: new ol.style.Icon({
                  imgSize: [700, 700],
                  scale: 0.05,
                  rotation: 0.0,
                  src: "styles/red-marker.svg"
            }),
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
