import React from "react";
import img1 from "../../images/network-managed-services.png";
import img2 from "../../images/network-managed-services-benefits.png";

const ManagedServicesSection1 = () => {
  return (
    <div className=" mt-[80px]">
      <div className=" flex flex-col md:flex-row w-full">
        <div className=" w-[40%] my-auto mx-auto">
          <img src={img1} className=" w-[280px]" />
        </div>
        <div className=" py-6">
          <h1 className=" px-3 py-3 text-xl sm:text-3xl">
            Network Managed Services-For Who ?
          </h1>
          <p className=" px-3 py-3 sm:text-lg">
            Comarch offers a wide range of network managed services, depending
            on the structure of the branches and the needs of specific
            companies:
          </p>
          <div className=" px-3">
            <div className="flex flex-row py-5 text-sm sm:text-base">
              <div>-</div>
              <div className=" text-gray-500">
                LAN– designed networks with a coverage over single office
                buildings or office or university campuses. This solution
                guarantees the highest available bandwidth for users within
                short connection distances
              </div>
            </div>
            <div className="flex flex-row py-5 text-sm sm:text-base">
              <div>-</div>
              <div className=" text-gray-500">
                WAN– designed networks with a coverage over customer’s
                geographically dispersed locations / branches
              </div>
            </div>
            <div className="flex flex-row py-5 text-sm md:text-base">
              <div>-</div>
              <div className=" text-gray-500">
                WIFI NETWORK– Comarch ICT offers a comprehensive service of
                initiating Wi-Fi wireless data networks in locations indicated
                by the customer. The resulting infrastructure provides access to
                the Internet of network devices such as PCs, notebooks, PDAs,
                smartphones etc. The solution can be supported by a platform
                that provides access authorization for users
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row w-full">
        <div className="w-[40%] my-auto mx-auto">
          <img src={img2} className=" w-[280px]" />
        </div>
        <div className=" py-6">
          <h1 className=" px-3 py-3 text-xl sm:text-3xl">
            Network management services – benefits
          </h1>
          <div className=" px-3">
            <div className="flex flex-row py-5 text-sm sm:text-base">
              <div>-</div>
              <div className=" text-gray-500">
                Provides scalable and consistent IT solutions with the
                possibility of their extension along with the changing business
              </div>
            </div>
            <div className="flex flex-row py-5 text-sm sm:text-base">
              <div>-</div>
              <div className=" text-gray-500">
                Improvement of the communication within the company through the
                selection of the optimal network architecture affects the growth
                of productivity and efficiency of employees and reduces the cost
                of communications
              </div>
            </div>
            <div className="flex flex-row py-5 text-sm md:text-base">
              <div>-</div>
              <div className=" text-gray-500">
                The company can concentrate on its core tasks and entrust the
                construction and maintenance of local area network to high-class
                specialists
              </div>
            </div>
            <div className="flex flex-row py-5 text-sm md:text-base">
              <div>-</div>
              <div className=" text-gray-500">
                First Line of Support – taking over by Comarch of contacts with
                telecommunications operators and ongoing network support
              </div>
            </div>
            <div className="flex flex-row py-5 text-sm md:text-base">
              <div>-</div>
              <div className=" text-gray-500">
                Clear means of assessing the quality guaranteed by SLA (Service
                Level Agreement)
              </div>
            </div>
            <div className="flex flex-row py-5 text-sm md:text-base">
              <div>-</div>
              <div className=" text-gray-500">
                One point of contact – in the event of failure, the customer
                contacts only Comarch
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagedServicesSection1;
