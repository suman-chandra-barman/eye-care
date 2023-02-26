import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(service);
  return <div>Details page</div>;
};

export default ServiceDetails;
