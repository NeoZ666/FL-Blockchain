import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";

function MapExample() {
  const defaultCenter = {
    lat: 40.748817,
    lng: -73.985428,
  };
  return (
    <div className="relative w-full rounded-xl shadow-lg">
      <LoadScript googleMapsApiKey="AIzaSyCN5RsuQUGXEAd3TqNpEkHygtmhFxNiDZk">
        <GoogleMap
          mapContainerClassName="w-full h-full rounded-xl"
          zoom={13}
          center={defaultCenter}
        >
          <Marker key="location" position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapExample;
