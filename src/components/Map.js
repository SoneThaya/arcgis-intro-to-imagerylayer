import React, { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";

const Map = () => {
  const MapEl = useRef(null);

  useEffect(() => {
    loadModules([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/ImageryLayer",
    ]).then(([Map, MapView, ImageryLayer]) => {
      /********************
       * Create image layer
       ********************/

      const layer = new ImageryLayer({
        url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/NLCDLandCover2001/ImageServer",
        format: "jpgpng", // server exports in either jpg or png format
      });

      /**************************
       * Add image layer to map
       *************************/

      const map = new Map({
        basemap: "gray-vector",
        layers: [layer],
      });

      const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-100, 40],
        zoom: 4,
      });
    });
  }, []);

  return (
    <div
      id="viewDiv"
      style={{ height: "100vh", width: "100vw" }}
      ref={MapEl}
    ></div>
  );
};

export default Map;
