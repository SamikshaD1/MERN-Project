import React from "react";
import { useAuth } from "../store/auth";

function Services() {
  const { service } = useAuth()

  if (!Array.isArray(service)) {
    return <p>Loading...</p>
  }

  return (
    <>
      <section className="h-full w-full flex justify-center">
        <div className="grid grid-cols-3 gap-4">
          {
            service.map((item, index) => (
              <div key={index} className="relative flex w-96 flex-col rounded-xl  bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                  <img
                    src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                      {item.provider}
                    </p>
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                      {item.price}
                    </p>
                  </div>
                  <p className="block font-bold text-2xl mb-1 leading-normal text-black">
                    {item.service}
                  </p>
                  <p className="block font-sans text-sm font-normal leading-normal text-gray-700 opacity-75">
                    {item.description}
                  </p>
                </div>
              </div>
            ))
          }


        </div>
      </section>
    </>
  )
}

export default Services;
