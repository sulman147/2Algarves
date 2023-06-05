'use client';

import L from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

import { GrMapLocation } from 'react-icons/gr';
import Button from './Button';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl; 
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
});

interface MapProps {
  center?: number[]
}

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const MapTwo: React.FC<MapProps> = ({ center }) => {
  return (
    <div className="flex flex-col bg-white mt-3 rounded-xl">
      <div className="flex flex-row items-center justify-between my-2 ml-6 gap-4 ">
        <div className="flex flex-row gap-4">
      <GrMapLocation size={20}/>
      <div  className="
        flex
        font-semibold
        text-xl
        items-center
      ">Location</div>
      </div>
        <div className=" w-[180px] mr-4">
              <Button
                disabled={false}
                label="Get Direction"
                onClick={() => { }}
              />
            </div>
      </div>
      <hr />
      <div className="p-4">
      <MapContainer 
        center={center as L.LatLngExpression || [51, -0.09]} 
        zoom={center ? 12 : 2} 
        scrollWheelZoom={false} 
        className="h-[35vh] rounded-lg"
      >
        <TileLayer
          url={url}
          attribution={attribution}
        />
        {center && (
          <Marker position={center as L.LatLngExpression} />
        )}
      </MapContainer>
      </div>
      </div>
  )
}

export default MapTwo