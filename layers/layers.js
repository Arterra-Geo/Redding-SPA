var wms_layers = [];
var lyr_NAIP_2016_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.dfg.ca.gov/arcgis/services/Base_Remote_Sensing/NAIP_2016/ImageServer/WMSServer?",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "NAIP_2016",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_NAIP_2016_0, 0]);var format_ReddingCityBoundary_1 = new ol.format.GeoJSON();
var features_ReddingCityBoundary_1 = format_ReddingCityBoundary_1.readFeatures(json_ReddingCityBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReddingCityBoundary_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ReddingCityBoundary_1.addFeatures(features_ReddingCityBoundary_1);var lyr_ReddingCityBoundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReddingCityBoundary_1, 
                style: style_ReddingCityBoundary_1,
                title: '<img src="styles/legend/ReddingCityBoundary_1.png" /> Redding City Boundary'
            });var format_CommercialParcels_2 = new ol.format.GeoJSON();
var features_CommercialParcels_2 = format_CommercialParcels_2.readFeatures(json_CommercialParcels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommercialParcels_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CommercialParcels_2.addFeatures(features_CommercialParcels_2);var lyr_CommercialParcels_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CommercialParcels_2, maxResolution:2.80044661523,

                style: style_CommercialParcels_2,
                title: '<img src="styles/legend/CommercialParcels_2.png" /> Commercial Parcels'
            });var format_CommercialZones_3 = new ol.format.GeoJSON();
var features_CommercialZones_3 = format_CommercialZones_3.readFeatures(json_CommercialZones_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommercialZones_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CommercialZones_3.addFeatures(features_CommercialZones_3);var lyr_CommercialZones_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CommercialZones_3, 
                style: style_CommercialZones_3,
                title: '<img src="styles/legend/CommercialZones_3.png" /> Commercial Zones'
            });var format_RoadLabels_4 = new ol.format.GeoJSON();
var features_RoadLabels_4 = format_RoadLabels_4.readFeatures(json_RoadLabels_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadLabels_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RoadLabels_4.addFeatures(features_RoadLabels_4);var lyr_RoadLabels_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RoadLabels_4, 
                style: style_RoadLabels_4,
                title: '<img src="styles/legend/RoadLabels_4.png" /> Road Labels'
            });var format_1000ftBuffer_5 = new ol.format.GeoJSON();
var features_1000ftBuffer_5 = format_1000ftBuffer_5.readFeatures(json_1000ftBuffer_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1000ftBuffer_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_1000ftBuffer_5.addFeatures(features_1000ftBuffer_5);var lyr_1000ftBuffer_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1000ftBuffer_5, 
                style: style_1000ftBuffer_5,
                title: '<img src="styles/legend/1000ftBuffer_5.png" /> 1000ft Buffer'
            });var format_Schools_6 = new ol.format.GeoJSON();
var features_Schools_6 = format_Schools_6.readFeatures(json_Schools_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schools_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Schools_6.addFeatures(features_Schools_6);var lyr_Schools_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Schools_6, 
                style: style_Schools_6,
                title: '<img src="styles/legend/Schools_6.png" /> Schools'
            });

lyr_NAIP_2016_0.setVisible(true);lyr_ReddingCityBoundary_1.setVisible(true);lyr_CommercialParcels_2.setVisible(true);lyr_CommercialZones_3.setVisible(true);lyr_RoadLabels_4.setVisible(true);lyr_1000ftBuffer_5.setVisible(true);lyr_Schools_6.setVisible(true);
var layersList = [lyr_NAIP_2016_0,lyr_ReddingCityBoundary_1,lyr_CommercialParcels_2,lyr_CommercialZones_3,lyr_RoadLabels_4,lyr_1000ftBuffer_5,lyr_Schools_6];
lyr_ReddingCityBoundary_1.set('fieldAliases', {'Name': 'Name', 'PERIMETER': 'PERIMETER', 'AREA': 'AREA', 'ACRES': 'ACRES', 'URL': 'URL', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_CommercialParcels_2.set('fieldAliases', {'APN': 'APN', 'ID': 'ID', 'Perimeter': 'Perimeter', 'Area_': 'Area_', 'Acres': 'Acres', 'SHAPE_STAr': 'SHAPE_STAr', 'SHAPE_STLe': 'SHAPE_STLe', });
lyr_CommercialZones_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ZONING': 'ZONING', 'Z_CLASS': 'Z_CLASS', 'Z_DESC': 'Z_DESC', 'ZONE_ID': 'ZONE_ID', 'BASE_DIST': 'BASE_DIST', 'OVERLAY_DI': 'OVERLAY_DI', 'OVERLAY__1': 'OVERLAY__1', 'Z_DESC2': 'Z_DESC2', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_RoadLabels_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ET_ID': 'ET_ID', 'Unique_ID': 'Unique_ID', 'GISNUM': 'GISNUM', 'Index_ID': 'Index_ID', 'Alt_ID': 'Alt_ID', 'PrefixDir': 'PrefixDir', 'PrefixType': 'PrefixType', 'StreetName': 'StreetName', 'StreetType': 'StreetType', 'SuffixDir': 'SuffixDir', 'FullStreet': 'FullStreet', 'LF_Actual': 'LF_Actual', 'LT_Actual': 'LT_Actual', 'RF_Actual': 'RF_Actual', 'RT_Actual': 'RT_Actual', 'LF_Exhaust': 'LF_Exhaust', 'LT_Exhaust': 'LT_Exhaust', 'RF_Exhaust': 'RF_Exhaust', 'RT_Exhaust': 'RT_Exhaust', 'CommunityL': 'CommunityL', 'CommunityR': 'CommunityR', 'ZipLeft': 'ZipLeft', 'ZipRight': 'ZipRight', 'CountyLeft': 'CountyLeft', 'CountyRigh': 'CountyRigh', 'NameValida': 'NameValida', 'CFCC': 'CFCC', 'Functional': 'Functional', 'CartoType': 'CartoType', 'Status': 'Status', 'Ownership': 'Ownership', 'Maintained': 'Maintained', 'Maintain_1': 'Maintain_1', 'F_ZLEV': 'F_ZLEV', 'T_ZLEV': 'T_ZLEV', 'SpeedLimit': 'SpeedLimit', 'LengthCal': 'LengthCal', 'LengthSour': 'LengthSour', 'FT_Minutes': 'FT_Minutes', 'TF_Minutes': 'TF_Minutes', 'TravelDire': 'TravelDire', 'Traversabl': 'Traversabl', 'Lanes': 'Lanes', 'Surface': 'Surface', 'BikeClass': 'BikeClass', 'NoBike': 'NoBike', 'IsBoundary': 'IsBoundary', 'LR_ID': 'LR_ID', 'LR_FromMea': 'LR_FromMea', 'LR_ToMeasu': 'LR_ToMeasu', 'Source': 'Source', 'Method': 'Method', 'DateEntere': 'DateEntere', 'DateUpdate': 'DateUpdate', 'UserUpdate': 'UserUpdate', 'AcDate': 'AcDate', 'QcExhaust': 'QcExhaust', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Shape__Len': 'Shape__Len', });
lyr_1000ftBuffer_5.set('fieldAliases', {'cat': 'cat', });
lyr_Schools_6.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'NAME': 'NAME', 'GRADE': 'GRADE', 'ADDRESS': 'ADDRESS', 'CITY': 'CITY', 'ZIP': 'ZIP', 'PHONE': 'PHONE', 'REGION': 'REGION', 'Type': 'Type', 'SID': 'SID', 'URL': 'URL', 'Active': 'Active', 'SchoolType': 'SchoolType', 'School': 'School', 'Reviewed': 'Reviewed', 'License': 'License', 'Comments': 'Comments', });
lyr_ReddingCityBoundary_1.set('fieldImages', {'Name': 'TextEdit', 'PERIMETER': 'TextEdit', 'AREA': 'TextEdit', 'ACRES': 'TextEdit', 'URL': 'TextEdit', 'Shape_STAr': 'TextEdit', 'Shape_STLe': 'TextEdit', });
lyr_CommercialParcels_2.set('fieldImages', {'APN': 'TextEdit', 'ID': 'TextEdit', 'Perimeter': 'TextEdit', 'Area_': 'TextEdit', 'Acres': 'TextEdit', 'SHAPE_STAr': 'TextEdit', 'SHAPE_STLe': 'TextEdit', });
lyr_CommercialZones_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'ZONING': 'TextEdit', 'Z_CLASS': 'TextEdit', 'Z_DESC': 'TextEdit', 'ZONE_ID': 'TextEdit', 'BASE_DIST': 'TextEdit', 'OVERLAY_DI': 'TextEdit', 'OVERLAY__1': 'TextEdit', 'Z_DESC2': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_RoadLabels_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'ET_ID': 'TextEdit', 'Unique_ID': 'TextEdit', 'GISNUM': 'TextEdit', 'Index_ID': 'TextEdit', 'Alt_ID': 'TextEdit', 'PrefixDir': 'TextEdit', 'PrefixType': 'TextEdit', 'StreetName': 'TextEdit', 'StreetType': 'TextEdit', 'SuffixDir': 'TextEdit', 'FullStreet': 'TextEdit', 'LF_Actual': 'TextEdit', 'LT_Actual': 'TextEdit', 'RF_Actual': 'TextEdit', 'RT_Actual': 'TextEdit', 'LF_Exhaust': 'TextEdit', 'LT_Exhaust': 'TextEdit', 'RF_Exhaust': 'TextEdit', 'RT_Exhaust': 'TextEdit', 'CommunityL': 'TextEdit', 'CommunityR': 'TextEdit', 'ZipLeft': 'TextEdit', 'ZipRight': 'TextEdit', 'CountyLeft': 'TextEdit', 'CountyRigh': 'TextEdit', 'NameValida': 'TextEdit', 'CFCC': 'TextEdit', 'Functional': 'TextEdit', 'CartoType': 'TextEdit', 'Status': 'TextEdit', 'Ownership': 'TextEdit', 'Maintained': 'TextEdit', 'Maintain_1': 'TextEdit', 'F_ZLEV': 'TextEdit', 'T_ZLEV': 'TextEdit', 'SpeedLimit': 'TextEdit', 'LengthCal': 'TextEdit', 'LengthSour': 'TextEdit', 'FT_Minutes': 'TextEdit', 'TF_Minutes': 'TextEdit', 'TravelDire': 'TextEdit', 'Traversabl': 'TextEdit', 'Lanes': 'TextEdit', 'Surface': 'TextEdit', 'BikeClass': 'TextEdit', 'NoBike': 'TextEdit', 'IsBoundary': 'TextEdit', 'LR_ID': 'TextEdit', 'LR_FromMea': 'TextEdit', 'LR_ToMeasu': 'TextEdit', 'Source': 'TextEdit', 'Method': 'TextEdit', 'DateEntere': 'TextEdit', 'DateUpdate': 'TextEdit', 'UserUpdate': 'TextEdit', 'AcDate': 'TextEdit', 'QcExhaust': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'TextEdit', 'last_edite': 'TextEdit', 'last_edi_1': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_1000ftBuffer_5.set('fieldImages', {'cat': 'TextEdit', });
lyr_Schools_6.set('fieldImages', {'DISTRICT': 'TextEdit', 'NAME': 'TextEdit', 'GRADE': 'TextEdit', 'ADDRESS': 'TextEdit', 'CITY': 'TextEdit', 'ZIP': 'TextEdit', 'PHONE': 'TextEdit', 'REGION': 'TextEdit', 'Type': 'TextEdit', 'SID': 'TextEdit', 'URL': 'TextEdit', 'Active': 'TextEdit', 'SchoolType': 'TextEdit', 'School': 'TextEdit', 'Reviewed': 'TextEdit', 'License': 'TextEdit', 'Comments': 'TextEdit', });
lyr_ReddingCityBoundary_1.set('fieldLabels', {'Name': 'no label', 'PERIMETER': 'no label', 'AREA': 'no label', 'ACRES': 'no label', 'URL': 'no label', 'Shape_STAr': 'no label', 'Shape_STLe': 'no label', });
lyr_CommercialParcels_2.set('fieldLabels', {'APN': 'no label', 'ID': 'no label', 'Perimeter': 'no label', 'Area_': 'no label', 'Acres': 'no label', 'SHAPE_STAr': 'no label', 'SHAPE_STLe': 'no label', });
lyr_CommercialZones_3.set('fieldLabels', {'OBJECTID': 'no label', 'ZONING': 'no label', 'Z_CLASS': 'no label', 'Z_DESC': 'no label', 'ZONE_ID': 'no label', 'BASE_DIST': 'no label', 'OVERLAY_DI': 'no label', 'OVERLAY__1': 'no label', 'Z_DESC2': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_RoadLabels_4.set('fieldLabels', {'OBJECTID': 'no label', 'ET_ID': 'no label', 'Unique_ID': 'no label', 'GISNUM': 'no label', 'Index_ID': 'no label', 'Alt_ID': 'no label', 'PrefixDir': 'no label', 'PrefixType': 'no label', 'StreetName': 'no label', 'StreetType': 'no label', 'SuffixDir': 'no label', 'FullStreet': 'no label', 'LF_Actual': 'no label', 'LT_Actual': 'no label', 'RF_Actual': 'no label', 'RT_Actual': 'no label', 'LF_Exhaust': 'no label', 'LT_Exhaust': 'no label', 'RF_Exhaust': 'no label', 'RT_Exhaust': 'no label', 'CommunityL': 'no label', 'CommunityR': 'no label', 'ZipLeft': 'no label', 'ZipRight': 'no label', 'CountyLeft': 'no label', 'CountyRigh': 'no label', 'NameValida': 'no label', 'CFCC': 'no label', 'Functional': 'no label', 'CartoType': 'no label', 'Status': 'no label', 'Ownership': 'no label', 'Maintained': 'no label', 'Maintain_1': 'no label', 'F_ZLEV': 'no label', 'T_ZLEV': 'no label', 'SpeedLimit': 'no label', 'LengthCal': 'no label', 'LengthSour': 'no label', 'FT_Minutes': 'no label', 'TF_Minutes': 'no label', 'TravelDire': 'no label', 'Traversabl': 'no label', 'Lanes': 'no label', 'Surface': 'no label', 'BikeClass': 'no label', 'NoBike': 'no label', 'IsBoundary': 'no label', 'LR_ID': 'no label', 'LR_FromMea': 'no label', 'LR_ToMeasu': 'no label', 'Source': 'no label', 'Method': 'no label', 'DateEntere': 'no label', 'DateUpdate': 'no label', 'UserUpdate': 'no label', 'AcDate': 'no label', 'QcExhaust': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'Shape__Len': 'no label', });
lyr_1000ftBuffer_5.set('fieldLabels', {'cat': 'no label', });
lyr_Schools_6.set('fieldLabels', {'DISTRICT': 'no label', 'NAME': 'no label', 'GRADE': 'no label', 'ADDRESS': 'no label', 'CITY': 'no label', 'ZIP': 'no label', 'PHONE': 'no label', 'REGION': 'no label', 'Type': 'no label', 'SID': 'no label', 'URL': 'no label', 'Active': 'no label', 'SchoolType': 'no label', 'School': 'no label', 'Reviewed': 'no label', 'License': 'no label', 'Comments': 'no label', });
lyr_Schools_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});