import React from "react";
//constants
import { properties } from "../../constants/properties";
import { locations } from "../../constants/locations";
import { clients } from "../../constants/clients";
//components
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import SiteBanner from "../../components/SiteBanner";
import ClientCard from "../../components/ClientCard";
import Form from "../../components/Form";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Banner />

      <div id="properties" className="flex justify-center p-10 mt-5">
        <h2 className="mb-2 text-3xl text-gray-500">Recent Properties</h2>
      </div>

      <div className="grid gap-5 p-4 gap-x-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <Card key={property?.id} data={property} />
        ))}
      </div>

      <SiteBanner bannerLocation="upper" />

      <div id="locations" className="flex justify-center p-10 mt-5">
        <h2 className="mb-2 text-3xl text-gray-500">Locations</h2>
      </div>

      <div className="grid gap-5 p-4 gap-x-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {locations.map((location) => (
          <Card key={location?.id} data={location} />
        ))}
      </div>

      <SiteBanner location="lower" />

      <div id="properties" className="flex justify-center p-10 mt-5">
        <h2 className="mb-2 text-3xl text-gray-500">
          What Clients Say About Us ?
        </h2>
      </div>

      <div className="grid gap-5 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {clients.map((client) => (
          <ClientCard key={client?.id} data={client} />
        ))}
      </div>

      <div id="properties" className="flex justify-center p-10 mt-5">
        <h2 className="mb-2 text-3xl text-gray-500">Contact Us</h2>
      </div>

      <div className="flex items-center justify-center p-10 mt-5 bg-green-300">
        <Form />
      </div>

      <div className="flex justify-center px-10 pt-12 sm:pt-32">
        <Footer />
      </div>
    </div>
  );
}
