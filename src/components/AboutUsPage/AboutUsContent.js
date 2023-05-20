import React from "react";
import svg1 from "../../images/it-asset-management.svg";
import svg2 from "../../images/malware-protection.svg";
import svg3 from "../../images/it-business-management.svg";

const AboutUsContent = () => {
  return (
    <div className="w-[95%] min-h-screen mx-auto flex justify-center items-center py-10 ">
      <div className=" w-[100%] py-10 bg-gray-200 rounded-md flex flex-col gap-14">
        <div className=" w-full flex flex-col justify-center gap-6 items-center">
          <h1 className=" px-3 font-bold text-xl sm:text-4xl text-[rgba(16,44,81,255)]">
            Why Choose MSPNET ?
          </h1>
          <p className=" px-5 text-[rgba(16,44,81,255)] text-lg sm:text-xl">
            Clients, partners and employees have chosen us for more than 25
            years for three reasons…
          </p>
        </div>
        <div className=" w-full flex flex-col justify-center items-center gap-7">
          <div className=" w-[90%] flex flex-col md:flex-row md:gap-0 gap-5 items-center justify-center text-gray-700">
            <div className=" w-1/4 ">
              <img src={svg1} className=" w-20 h-20 mx-auto" />
            </div>
            <div className=" w-3/4">
              <p className=" text-sm ">
                Full Suite of Mature Managed Services For more than 25 years, EI
                has expertly managed the full IT lifecycle for satisfied
                Fortune-500 and mid-tier SMB clients across countless
                industries. We unite all the services and technologies you need
                for one comprehensive, managed services solution.
              </p>
            </div>
          </div>
          <div className=" w-[90%] flex flex-col md:flex-row md:gap-0  gap-5 items-center justify-center text-gray-700">
            <div className=" w-1/4">
              <img src={svg2} className=" w-20 h-20 mx-auto" />
            </div>
            <div className=" w-3/4">
              <p className="text-sm">
                Ideal Combination of People & Process In a time when customer
                service has faded into near non-existence across all industries,
                EI still recognizes the importance of quality, human
                relationships within IT. We seek out, employ, and nurture the
                industry’s best talent to provide our clients with the
                strongest, most-capable team.
              </p>
            </div>
          </div>
          <div className=" w-[90%] flex flex-col md:flex-row md:gap-0  gap-5 items-center justify-center text-gray-700">
            <div className=" w-1/4">
              <img src={svg3} className=" w-20 h-20 mx-auto" />
            </div>
            <div className=" w-3/4">
              <p className=" text-sm">
                Customization that Counts You don’t need us to tell you how your
                business is unique – you live it every day. You need us to tell
                you how IT can be the asset that adds value to your business. A
                one-size-fits-all approach doesn’t work… you need the
                flexibility and customization that comes from a partner like EI.
                We work to assess where you are and help move you forward
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContent;
