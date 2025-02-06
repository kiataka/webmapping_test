var wms_layers = [];

var format_Region = new ol.format.GeoJSON();
var features_Region = format_Region.readFeatures(json_Region,
        { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Region = new ol.source.Vector({
        attributions: '<a class="legend"><img src="styles/legend/Region.png" /> <b>Region</b>'
});
jsonSource_Region.addFeatures(features_Region);
var lyr_Region = new ol.layer.Vector({
        declutter: false,
        source: jsonSource_Region,
        style: style_Region,
        permalink: "Region",
        popuplayertitle: 'Region',
        interactive: true,
        title: '<img src="styles/legend/Region.png" /> Region'
});
var format_AP_PN = new ol.format.GeoJSON();
var features_AP_PN = format_AP_PN.readFeatures(json_AP_PN,
        { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_AP_PN = new ol.source.Vector({
        attributions: '<a class="legend"><img src="styles/legend/AP_PN.png" /> <b>AP_PN</b>'
});
jsonSource_AP_PN.addFeatures(features_AP_PN);
var lyr_AP_PN = new ol.layer.Vector({
        declutter: false,
        source: jsonSource_AP_PN,
        style: style_AP_PN,
        permalink: "AP_PN",
        popuplayertitle: 'AP_PN',
        interactive: true,
        title: '<img src="styles/legend/AP_PN.png" /> AP_PN'
});
var format_Ecoregion = new ol.format.GeoJSON();
var features_Ecoregion = format_Ecoregion.readFeatures(json_Ecoregion,
        { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Ecoregion = new ol.source.Vector({
        attributions: '<a class="legend"><img src="styles/legend/Ecoregion.png" /> <b>Ecoregion</b>'
});
jsonSource_Ecoregion.addFeatures(features_Ecoregion);
var lyr_Ecoregion = new ol.layer.Vector({
        declutter: false,
        source: jsonSource_Ecoregion,
        style: style_Ecoregion,
        permalink: "Ecoregion",
        popuplayertitle: 'Ecoregion',
        interactive: true,
        title: '<img src="styles/legend/Ecoregion.png" /> Ecoregion'
});
var format_Hotspot = new ol.format.GeoJSON();
var features_Hotspot = format_Hotspot.readFeatures(json_Hotspot,
        { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Hotspot = new ol.source.Vector({})
cluster_Hotspot = new ol.source.Cluster({
        distance: 10,
        source: jsonSource_Hotspot,
        attributions: '<a class="legend"><img src="styles/legend/Hotspot.png" /> <b>Hotspot</b>'
});
jsonSource_Hotspot.addFeatures(features_Hotspot);
var lyr_Hotspot = new ol.layer.AnimatedCluster({
        declutter: false,
        source: cluster_Hotspot,
        style: function (feature, resolution) {
                return clusterStyle(feature, resolution, style_Hotspot);
        },
        permalink: "Hotspot",
        popuplayertitle: 'Hotspot',
        interactive: true,
        title: '<img src="styles/legend/Hotspot.png" /> Hotspot'
});
var format_Partenaire = new ol.format.GeoJSON();
var features_Partenaire = format_Partenaire.readFeatures(json_Partenaire,
        { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Partenaire = new ol.source.Vector({})
cluster_Partenaire = new ol.source.Cluster({
        distance: 10,
        source: jsonSource_Partenaire,
        attributions: '<a class="legend"><img src="styles/legend/Partenaire.png" /> <b>Partenaire</b>'
});
jsonSource_Partenaire.addFeatures(features_Partenaire);
var lyr_Partenaire = new ol.layer.AnimatedCluster({
        declutter: false,
        source: cluster_Partenaire,
        style: function (feature, resolution) {
                return clusterStyle(feature, resolution, style_Partenaire);
        },
        permalink: "Partenaire",
        popuplayertitle: 'Partenaire',
        interactive: true,
        title: '<img src="styles/legend/Partenaire.png" /> Partenaire'
});

lyr_Region.setVisible(true); lyr_AP_PN.setVisible(true); lyr_Ecoregion.setVisible(true); lyr_Hotspot.setVisible(true); lyr_Partenaire.setVisible(true);
var layersList = [lyr_Region, lyr_AP_PN, lyr_Ecoregion, lyr_Hotspot, lyr_Partenaire];
lyr_Region.set('fieldAliases', { 'REGION_NAM': 'REGION_NAM', 'BNGRC_REG_': 'BNGRC_REG_', 'h': 'h', });
lyr_AP_PN.set('fieldAliases', { 'WDPAID': 'WDPAID', 'WDPA_PID': 'WDPA_PID', 'PA_DEF': 'PA_DEF', 'NAME': 'NAME', 'ORIG_NAME': 'ORIG_NAME', 'DESIG': 'DESIG', 'DESIG_ENG': 'DESIG_ENG', 'DESIG_TYPE': 'DESIG_TYPE', 'IUCN_CAT': 'IUCN_CAT', 'INT_CRIT': 'INT_CRIT', 'MARINE': 'MARINE', 'REP_M_AREA': 'REP_M_AREA', 'GIS_M_AREA': 'GIS_M_AREA', 'REP_AREA': 'REP_AREA', 'GIS_AREA': 'GIS_AREA', 'NO_TAKE': 'NO_TAKE', 'NO_TK_AREA': 'NO_TK_AREA', 'STATUS': 'STATUS', 'STATUS_YR': 'STATUS_YR', 'GOV_TYPE': 'GOV_TYPE', 'OWN_TYPE': 'OWN_TYPE', 'MANG_AUTH': 'MANG_AUTH', 'MANG_PLAN': 'MANG_PLAN', 'VERIF': 'VERIF', 'METADATAID': 'METADATAID', 'SUB_LOC': 'SUB_LOC', 'PARENT_ISO': 'PARENT_ISO', 'ISO3': 'ISO3', 'SUPP_INFO': 'SUPP_INFO', 'CONS_OBJ': 'CONS_OBJ', 'layer': 'layer', 'path': 'path', });
lyr_Ecoregion.set('fieldAliases', { 'ECO REGION': 'ECO REGION', 'REGION': 'REGION', 'PATH': 'PATH', 'NB': 'NB', 'Logos': 'Logos', });
lyr_Hotspot.set('fieldAliases', { 'COMMUNE_NA': 'COMMUNE_NA', 'DISTRICT_N': 'DISTRICT_N', 'REGION_NAM': 'REGION_NAM', 'OLD_PROVIN': 'OLD_PROVIN', 'VAL': 'VAL', 'x': 'x', 'y': 'y', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', });
lyr_Partenaire.set('fieldAliases', { 'Partenaire': 'Partenaire', 'Ecoregion': 'Ecoregion', 'Y': 'Y', 'X': 'X', 'Contact': 'Contact', 'Sites web': 'Sites web', });
lyr_Region.set('fieldImages', { 'REGION_NAM': '', 'BNGRC_REG_': '', 'h': '', });
lyr_AP_PN.set('fieldImages', { 'WDPAID': '', 'WDPA_PID': '', 'PA_DEF': '', 'NAME': '', 'ORIG_NAME': '', 'DESIG': '', 'DESIG_ENG': '', 'DESIG_TYPE': '', 'IUCN_CAT': '', 'INT_CRIT': '', 'MARINE': '', 'REP_M_AREA': '', 'GIS_M_AREA': '', 'REP_AREA': '', 'GIS_AREA': '', 'NO_TAKE': '', 'NO_TK_AREA': '', 'STATUS': '', 'STATUS_YR': '', 'GOV_TYPE': '', 'OWN_TYPE': '', 'MANG_AUTH': '', 'MANG_PLAN': '', 'VERIF': '', 'METADATAID': '', 'SUB_LOC': '', 'PARENT_ISO': '', 'ISO3': '', 'SUPP_INFO': '', 'CONS_OBJ': '', 'layer': '', 'path': '', });
lyr_Ecoregion.set('fieldImages', { 'ECO REGION': 'TextEdit', 'REGION': 'TextEdit', 'PATH': 'TextEdit', 'NB': 'TextEdit', 'Logos': 'TextEdit', });
lyr_Hotspot.set('fieldImages', { 'COMMUNE_NA': '', 'DISTRICT_N': '', 'REGION_NAM': '', 'OLD_PROVIN': '', 'VAL': '', 'x': '', 'y': '', 'auxiliary_': '', 'auxiliar_1': '', });
lyr_Partenaire.set('fieldImages', { 'Partenaire': '', 'Ecoregion': '', 'Y': '', 'X': '', 'Contact': '', 'Sites web': '', });
lyr_Region.set('fieldLabels', { 'REGION_NAM': 'no label', 'BNGRC_REG_': 'no label', 'h': 'no label', });
lyr_AP_PN.set('fieldLabels', { 'WDPAID': 'no label', 'WDPA_PID': 'no label', 'PA_DEF': 'no label', 'NAME': 'no label', 'ORIG_NAME': 'no label', 'DESIG': 'no label', 'DESIG_ENG': 'no label', 'DESIG_TYPE': 'no label', 'IUCN_CAT': 'no label', 'INT_CRIT': 'no label', 'MARINE': 'no label', 'REP_M_AREA': 'no label', 'GIS_M_AREA': 'no label', 'REP_AREA': 'no label', 'GIS_AREA': 'no label', 'NO_TAKE': 'no label', 'NO_TK_AREA': 'no label', 'STATUS': 'no label', 'STATUS_YR': 'no label', 'GOV_TYPE': 'no label', 'OWN_TYPE': 'no label', 'MANG_AUTH': 'no label', 'MANG_PLAN': 'no label', 'VERIF': 'no label', 'METADATAID': 'no label', 'SUB_LOC': 'no label', 'PARENT_ISO': 'no label', 'ISO3': 'no label', 'SUPP_INFO': 'no label', 'CONS_OBJ': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Ecoregion.set('fieldLabels', { 'ECO REGION': 'no label', 'REGION': 'no label', 'PATH': 'no label', 'NB': 'no label', 'Logos': 'no label', });
lyr_Hotspot.set('fieldLabels', { 'COMMUNE_NA': 'no label', 'DISTRICT_N': 'no label', 'REGION_NAM': 'no label', 'OLD_PROVIN': 'no label', 'VAL': 'no label', 'x': 'no label', 'y': 'no label', 'auxiliary_': 'no label', 'auxiliar_1': 'no label', });
lyr_Partenaire.set('fieldLabels', { 'Partenaire': 'no label', 'Ecoregion': 'no label', 'Y': 'no label', 'X': 'no label', 'Contact': 'no label', 'Sites web': 'no label', });
lyr_Partenaire.on('precompose', function (evt) {
        evt.context.globalCompositeOperation = 'normal';
});