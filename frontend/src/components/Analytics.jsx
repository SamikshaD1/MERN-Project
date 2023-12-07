import React from "react";

const Analytics = () => {
  return (
    <>
      <section className="section-analytics py-24">
        <div className="container mx-auto bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="div1 border-r-2 border-grey-500">
            <h2 className="text-4xl font-bold">50+</h2>
            <p className="capitalize">register companies</p>
          </div>
          <div className="div1 border-r-2 border-grey-500">
            <h2 className="text-4xl font-bold">100,00+</h2>
            <p className="capitalize">Happy Client</p>
          </div>
          <div className="div1 border-r-2 border-grey-500">
            <h2 className="text-4xl font-bold">500+</h2>
            <p className="capitalize">Wel known Developer</p>
          </div>
          <div className="div1">
            <h2 className="text-4xl font-bold">24/7+</h2>
            <p className="capitalize">Services</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Analytics;
