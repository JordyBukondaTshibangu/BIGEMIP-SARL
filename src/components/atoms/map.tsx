"use client";

import { useEventHandlers } from "@react-leaflet/core";
import { LatLngBounds, Map as LeafletMap, LeafletMouseEvent } from "leaflet";
import { FC, ReactElement, useCallback, useMemo, useState } from "react";
import {
  MapContainer,
  Rectangle,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";

// Classes used by Leaflet to position controls
const POSITION_CLASSES: Record<string, string> = {
  bottomleft: "leaflet-bottom leaflet-left",
  bottomright: "leaflet-bottom leaflet-right",
  topleft: "leaflet-top leaflet-left",
  topright: "leaflet-top leaflet-right",
};

const BOUNDS_STYLE = { weight: 1 };

interface MinimapBoundsProps {
  parentMap: LeafletMap;
  zoom: number;
}

const MinimapBounds: FC<MinimapBoundsProps> = ({ parentMap, zoom }) => {
  const minimap = useMap();

  // Clicking a point on the minimap sets the parent's map center
  const onClick = useCallback(
    (e: LeafletMouseEvent) => {
      parentMap.setView(e.latlng, parentMap.getZoom());
    },
    [parentMap]
  );
  useMapEvent("click", onClick);

  // Keep track of bounds in state to trigger renders
  const [bounds, setBounds] = useState<LatLngBounds>(parentMap.getBounds());

  const onChange = useCallback(() => {
    setBounds(parentMap.getBounds());
    // Update the minimap's view to match the parent map's center and zoom
    minimap.setView(parentMap.getCenter(), zoom);
  }, [minimap, parentMap, zoom]);

  // Listen to events on the parent map
  const handlers = useMemo(
    () => ({ move: onChange, zoom: onChange }),
    [onChange]
  );
  useEventHandlers(
    { instance: parentMap, context: { __version: 1, map: parentMap } },
    handlers
  );

  return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />;
};

interface MinimapControlProps {
  position?: keyof typeof POSITION_CLASSES;
  zoom?: number;
}

const MinimapControl: FC<MinimapControlProps> = ({
  position = "topright",
  zoom = 0,
}) => {
  const parentMap = useMap();

  // Memoize the minimap so it's not affected by position changes
  const minimap = useMemo<ReactElement>(
    () => (
      <MapContainer
        style={{ height: 80, width: 80 }}
        center={parentMap.getCenter()}
        zoom={zoom}
        dragging={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        attributionControl={false}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MinimapBounds parentMap={parentMap} zoom={zoom} />
      </MapContainer>
    ),
    [parentMap, zoom]
  );

  const positionClass =
    (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright;

  return (
    <div className={positionClass}>
      <div className="leaflet-control leaflet-bar">{minimap}</div>
    </div>
  );
};

const Map: FC = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={6} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MinimapControl position="topright" />
    </MapContainer>
  );
};

export default Map;
