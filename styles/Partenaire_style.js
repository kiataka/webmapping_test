var size = 0;
var placement = 'point';

var style_Partenaire = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = ""; 
    var labelFont = "13.0px \'Times New Roman\', sans-serif";
    var labelFill = "#0158ab";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
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
    if (feature.get("Partenaire") !== null && resolution > 0 && resolution < 93) {
        labelText = String(feature.get("Partenaire"));
    }    
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({
              points: 20,
              radius: 56.99999999999999,
              fill: new ol.style.Fill({
              color: 'white'
                 }),
              stroke: new ol.style.Stroke({
                color: "black",
                width: 1.5
                })
               })
             }),
                 new ol.style.Style({
                  image: new ol.style.Icon({
                  imgSize: [700, 700],
                  scale: 0.1357142857142857,
                  // anchor: [47, 47],
                  //anchorXUnits: "pixels",
                  //anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/blue-marker.svg"
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
