import React from "react";

const SupplierManagementSection = () => {
  return (
    <div className=" mt-[80px]">
      <div className="w-full text-center bg-gray-200 py-10">
        <h1 className=" px-5 text-3xl sm:text-4xl md:text-5xl py-10 text-[rgba(16,44,81,255)]">
          Multi-Site Internet Access with One Invoice and NOC
        </h1>
        <p className=" px-5 text-sm sm:text-lg md:text-xl py-3 text-[rgba(16,44,81,255)]">
          Tired of managing numerous internet access bills? Tired of trying to
          figure out what carrier to call when there is an internet access
          problem? SD-WAN Experts provides internet access, anywhere on the
          planet. In fact, our partners have built up an installed base in 180
          countries and counting. Get broadband internet access or dedicated
          internet access with premium SLA’s. Either way, you always get static
          IP addresses, onsite installation and an Ethernet hand-off all with a
          single NOC and a single invoice.
        </p>
      </div>
      <div className=" flex flex-col gap-5 w-[80%] mx-auto">
        <div className="">
          <h1 className=" px-5 text-base sm:text-lg md:text-xl py-5 text-[rgba(16,44,81,255)]">
            Internet Access
          </h1>
          <p className=" px-5 text-sm sm:text-base md:text-lg py-3 text-gray-500">
            Depending on the location, access can be delivered using all
            available access technologies, such as Fiber (Dedicated, FttX),
            Copper (SONET/SDH) ADSL, SDSL, VDSL, Cable (DOCSIS), Wireless
            (Microwave/Radio, WiMax, 3G/4G/LTE) and Satellite.
          </p>
        </div>
        <div className="">
          <h1 className=" px-5 text-base sm:text-lg md:text-xl py-5 text-[rgba(16,44,81,255)]">
            Standard or Premium SLAs
          </h1>
          <p className=" px-5 text-sm sm:text-base md:text-lg py-3 text-gray-500">
            We offer standard SLA’s for small office and backup solutions, up to
            protected Internet access with premium SLAs for business critical
            sites and cloud applications. Our premium SLAs include guaranteed
            Time To Deliver and Time To Repair service levels
          </p>
        </div>
        <div className="">
          <h1 className=" px-5 text-base sm:text-lg md:text-xl py-5 text-[rgba(16,44,81,255)]">
            24×7 NOC Support
          </h1>
          <p className=" px-5 text-sm sm:text-base md:text-lg py-3 text-gray-500">
            Benefit from redundant global Network Operations Centers (NOCs) in
            the Americas, EMEA, and Asia Pacific. The NOC continuously monitors
            all your sites and speak all the local languages in order to
            efficiently and effectively trouble shoot any problem.
          </p>
        </div>
        <div className="">
          <h1 className=" px-5 text-base sm:text-lg md:text-xl py-5 text-[rgba(16,44,81,255)]">
            Get a Custom Internet Access Solution
          </h1>
          <p className=" px-5 text-sm sm:text-base md:text-lg py-3 text-gray-500">
            Whether you have a retail chain or an enterprise with locations
            around the nation or the world, SD-WAN Experts can craft an internet
            access solution that will take the effort out of managing your
            internet access….or paying your bills. This is perfect if your are
            considering a move away from MPLS for some of your locations, or to
            simplify your network management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupplierManagementSection;
