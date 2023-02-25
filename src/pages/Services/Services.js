import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../components/ServiceCard";

const Services = () => {
  const services = useLoaderData();
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
    </section>
  );
};

export default Services;
