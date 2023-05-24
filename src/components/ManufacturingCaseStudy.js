import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ManufacturingCaseStudy = () => {
  return (
    <div>
      <Navbar />
      <div className=" mt-[80px] mb-[20px]">
        <div>
          <div>
            <h1 className=" px-5 text-3xl sm:text-4xl md:text-5xl py-10 text-[rgba(16,44,81,255)] text-center">
              Challenges
            </h1>
          </div>
          <div className=" w-[80%] mx-auto text-gray-500">
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Optimizing production requires a system where production data
                can be visualized
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Understanding how much energy is consumed at which location
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Data-driven solutions for achieving carbon neutrality and
                innovation in production
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Protecting production facilities from cyberattacks</div>
            </div>
          </div>
          <div>
            <h1 className=" px-5 text-3xl sm:text-4xl md:text-5xl py-10 text-[rgba(16,44,81,255)] text-center">
              Solutions
            </h1>
          </div>
          <div className=" w-[80%] mx-auto text-gray-500">
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Cisco Catalyst Series Switches</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Cisco Industrial Ethernet Switches</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Cisco Industrial Routers</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Cisco Security Solutions</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Cisco Wireless LAN Solutions</div>
            </div>
          </div>
          <div>
            <h1 className=" px-5 text-3xl sm:text-4xl md:text-5xl py-10 text-[rgba(16,44,81,255)] text-center">
              Results
            </h1>
          </div>
          <div className=" w-[80%] mx-auto text-gray-500">
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Optimized production and carbon neutrality</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Improved the plant utilization rate</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Energy-saving performance of machine tools</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Able to collect operation data of delivered machine tools in the
                cloud
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Mazak iCONNECT developed to enhance the quality of support
                service
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ManufacturingCaseStudy;
