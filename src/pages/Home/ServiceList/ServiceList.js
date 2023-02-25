import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../../components/ServiceCard";

const ServiceList = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="container mx-auto px-2 py-10 md:py-20">
      <h2 className="text-center uppercase underline font-bold text-2xl md:text-4xl mb-5">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-4">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center mt-5">
        <Link to="/services">
          <button className="btn btn-warning text-white rounded-3xl px-10 py-1">
            Other Services
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ServiceList;
