import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const Marker = ({ mark }) => <div>{mark}</div>;

function SimpleGoogleMap() {
  const defaultProps = {
    center: {
      lat: 34.034588238742806,
      lng: -118.25244723105425,
    },
    zoom: 15,
  };

  return (
    <Wrapper>
      <div style={{ height: "20rem", width: "30rem" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAP_KEY /* YOUR KEY HERE */,
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <Marker
            lat={34.034588238742806}
            lng={-118.25244723105425}
            mark={<span className="Marker" />}
          />
        </GoogleMapReact>
      </div>
    </Wrapper>
  );
}
//}

const Wrapper = styled.div`
   {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Marker{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: white;
  border: 5px solid red;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
  &:hover {
    z-index: 1;
  }
`;
export default SimpleGoogleMap;
