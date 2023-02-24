import React from "react";

const ServiceCard = ({ service }) => {
  const { name, image, price, description } = service;
  return (
    <div className="card card-compact shadow-xl">
      <figure>
        <img src={image} alt="eye_service" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p>
          {description.length > 100
            ? description.split("").slice(0, 100)
            : description}
        </p>
        <div className="card-actions justify-between items-center">
          <p className="text-lg font-semibold">Price : ${price}</p>
          <button className="btn btn-outline btn-info rounded-3xl px-8 hover:text-white">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
