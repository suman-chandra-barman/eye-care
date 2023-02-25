import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLocation } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { name, image, price, description } = service;
  const { pathname } = useLocation();

  let details = "";
  if (pathname === "/services") {
    details = description;
  } else {
    if (description.length > 100) {
      details = description.split("").slice(0, 100);
    } else {
      details = description;
    }
  }

  return (
    <div className="card card-compact shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={image}>
            <img src={image} alt="eye_service" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p>{details}</p>
        <div className="card-actions justify-between items-center">
          <p className="text-xl font-semibold">
            ${parseFloat(price).toFixed(2)}
          </p>
          <button className="btn btn-outline btn-success rounded-3xl px-8 hover:border-success hover:bg-success hover:text-white">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
