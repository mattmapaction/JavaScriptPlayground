

require(["dojo/dom-construct", "dojo/dom", "dojo/on","app/map"], function (domConstruct, dom, on, mapHandler) {

    var appDiv = dom.byId("app")
    var mapDiv = domConstruct.create("div", { id: "map" }, appDiv);
    var browserBox = domConstruct.create("div", { id: "browse"}, appDiv)

    console.log("Creating Div")
    console.log(mapDiv.id)

    mapHandler.loadMap()

});