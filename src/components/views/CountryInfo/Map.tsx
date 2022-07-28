import { useRef, useEffect } from "react";
import { loadModules } from "esri-loader";
import { Stack } from "@mui/material";

interface Props {
  countryCapitalGeo: Array<[]>;
}

function CountryInfoMap({ countryCapitalGeo }: Props) {
  const MapEl = useRef(null);

  useEffect(() => {
    if (countryCapitalGeo) {
      let view: {
        graphics: { add: (arg0: any) => void };
        destroy: () => void;
      } | null;

      let marker = {
        type: "simple-marker",
        style: "circle",
        color: "blue",
        size: 6,
        outline: {
          color: [128, 128, 128, 0.5],
          width: "25px",
        },
      };

      loadModules(["esri/views/MapView", "esri/WebMap", "esri/Graphic"], {
        css: true,
      }).then(([MapView, WebMap, Graphic]) => {
        const webmap = new WebMap({
          basemap: "topo-vector",
        });

        const point = {
          type: "point",
          longitude: countryCapitalGeo[1],
          latitude: countryCapitalGeo[0],
        };
        const pointGraphic = new Graphic({
          geometry: point,
          symbol: marker,
        });

        view = new MapView({
          map: webmap,
          center: countryCapitalGeo?.reverse(),
          zoom: 13,
          // use ref as container
          container: MapEl.current,
        });
        view?.graphics.add(pointGraphic);
      });
      return () => {
        // close the map view
        if (!!view) {
          view.destroy();
          view = null;
        }
      };
    }
  }, [countryCapitalGeo]);

  return <Stack component="div" style={{ height: 600 }} ref={MapEl}></Stack>;
}

export default CountryInfoMap;
