
define(
    ["esri/map", "dojo/dom"],
    function (Map, dom) {

    mapDiv = dom.byId("map")

    function loadMap() {
        map = new Map("map", {
            basemap: "topo",  //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
            center: [-122.45, 37.75], // longitude, latitude
            zoom: 13
        });
    }

    return {
        loadMap: loadMap,
    }

    }
);