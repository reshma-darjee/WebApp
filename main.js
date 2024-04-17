require(["esri/widgets/LayerList",
  "esri/widgets/Expand",
  "esri/widgets/BasemapGallery",
  "esri/widgets/Locate",
  "esri/widgets/Home",
  "esri/widgets/ScaleBar",
  "esri/widgets/Legend",
  "esri/config",
  "esri/WebMap",
  "esri/views/MapView"],
  function (LayerList, Expand, BasemapGallery, Locate, Home, ScaleBar, Legend, esriConfig, WebMap, MapView) {
    esriConfig.portalUrl = "https://cgi.nlcs.gov.bt/portal"
    // Create a Map instance
    const myMap = new WebMap({

      portalItem: { // autocasts as new PortalItem()
        id: "1b0402fb16c945b6911bcc5bc0c2d739"
      }
    });
    // Create a MapView instance (for 2D viewing) and reference the map instance
    const view = new MapView({
      map: myMap,  // References the ID of a DOM element
      container: "viewDiv",
      // References the ID of a DOM element
    });
    let legend = new Legend({
      view: view,
      container: "legend-container"
    });

    // view.ui.add(legend, "bottom-left");
    let scaleBar = new ScaleBar({
      view: view,
      unit: "metric"
    });
    // Add widget to the bottom left corner of the view
    view.ui.add(scaleBar, {
      position: "bottom-right"
    });
    let homeWidget = new Home({
      view: view
    });

    // adds the home widget to the top left corner of the MapView
    view.ui.add(homeWidget, "top-left");

    let locateWidget = new Locate({
      view: view,   // Attaches the Locate button to the view

    });

    view.ui.add(locateWidget, "top-left");

    let basemapGallery = new BasemapGallery({
      view: view,
      container: "bg-container",
    });
    // // Add widget to the top right corner of the view
    // view.ui.add(basemapGallery, {
    //   position: "top-right"
    // });
    //  let bgExpand = new Expand({
    //         view: view,
    //         content: basemapGallery,

    //       });

    let layerList = new LayerList({
      view: view,
      container: "layerlist-container"
    });

    // let LegendExpand = new Expand({
    //   view: view,
    //   content: legend,

    // });
    // view.ui.add([bgExpand], "top-right")

    // MODALS //
    const appDetailModalBtn = document.getElementById("app-details-action");
    const appDetailModalEl = document.getElementById("app-details-modal");
    appDetailModalBtn.addEventListener("click", () => { appDetailModalEl.open = !appDetailModalEl.open });
  });
