import React, { useRef, useEffect } from "react";
import googleMap from "../images/google-maps.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "../images/placeholder.png";
import { Icon } from "leaflet";

function Location() {
  const gotoGoogleMap = () => {
    window.location.href =
      "https://www.google.com/maps/place//@19.982057,105.9811937,17z/data=!4m6!1m5!3m4!2zMTnCsDU4JzU1LjQiTiAxMDXCsDU5JzAxLjYiRQ!8m2!3d19.982057!4d105.983774?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D";
  };

  return (
    <div className="container">
      <div className="title" style={{marginBottom: "20px", borderBottom: "1px solid #000"}}>Bản đồ</div>
      <div className="location__container">
        <div className="location">
          <div className="location__details">
            <div>Địa điểm nhà trai</div>
            <div>Nga Thủy-Nga Sơn-Thanh Hóa</div>
          </div>
          <MapContainer
            center={[19.982057, 105.983774]}
            zoom={13}
            style={{ height: "340px", width: "340px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={[19.982057, 105.983774]}
              icon={
                new Icon({
                  iconUrl: markerIconPng,
                  iconSize: [31, 31],
                  iconAnchor: [12, 41],
                })
              }
            >
              <Popup>Địa điểm tổ chức hôn lễ nhà trai</Popup>
            </Marker>
          </MapContainer>
          <div className="location__map-icon-box">
            <div className="location__map-item" onClick={gotoGoogleMap}>
              <img
                src={googleMap}
                className="location__map-icon"
                alt="naverMap"
              />
              <span>Mở với Google map</span>
            </div>
          </div>
        </div>
        <div className="location">
          <div className="location__details">
            <div>Địa điểm nhà gái</div>
            <div>Nga Thủy-Nga Sơn-Thanh Hóa</div>
          </div>
          <MapContainer
            center={[19.982057, 105.983774]}
            zoom={13}
            style={{ height: "340px", width: "340px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={[19.982057, 105.983774]}
              icon={
                new Icon({
                  iconUrl: markerIconPng,
                  iconSize: [31, 31],
                  iconAnchor: [12, 41],
                })
              }
            >
              <Popup>Địa điểm tổ chức hôn lễ nhà gái</Popup>
            </Marker>
          </MapContainer>
          <div className="location__map-icon-box">
            <div className="location__map-item" onClick={gotoGoogleMap}>
              <img
                src={googleMap}
                className="location__map-icon"
                alt="naverMap"
              />
              <span>Mở với Google map</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
