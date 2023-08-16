"use client";

import React, { useMemo } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  });

  if (!isLoaded) return <div className="flex jusify-center items-center text-center text-4xl h-[50vh] ">Loading...</div>;
  return <RenderMap />;
}

function RenderMap() {
  const center = useMemo(() => ({ lat: 29.983390719825287, lng: -92.13313647297247 }), []);

  return <GoogleMap zoom={17} center={center} mapContainerClassName="w-full sm:h-full h-[50vh] shadow-lg"></GoogleMap>;
}
export default Map;
