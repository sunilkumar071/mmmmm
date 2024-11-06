var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_srm_1 = new ol.format.GeoJSON();
var features_srm_1 = format_srm_1.readFeatures(json_srm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_srm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_srm_1.addFeatures(features_srm_1);
var lyr_srm_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_srm_1, 
                style: style_srm_1,
                popuplayertitle: "srm",
                interactive: true,
                title: '<img src="styles/legend/srm_1.png" /> srm'
            });

lyr_OSMStandard_0.setVisible(true);lyr_srm_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_srm_1];
lyr_srm_1.set('fieldAliases', {'id': 'id', 'population': 'population', 'block': 'block', 'floors': 'floors', });
lyr_srm_1.set('fieldImages', {'id': '', 'population': '', 'block': '', 'floors': '', });
lyr_srm_1.set('fieldLabels', {'id': 'no label', 'population': 'no label', 'block': 'no label', 'floors': 'no label', });
lyr_srm_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});