import React from "react";
import img1 from "../../images/Managed-IT-Security-Services-1.png";
import img2 from "../../images/IT-Security-Auditing.png";
import img3 from "../../images/IT-Security-Integration.png";

const RiskSecuritySection = () => {
  return (
    <div className=" mt-[80px]">
      <div className="w-full text-center bg-gray-200 py-5">
        <h1 className=" w-full text-center text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          In fast paced world, IT Risk & Security Management is critical for
          every organization
        </h1>
      </div>
      <div className="w-[80%] mx-auto">
        <p className=" w-full text-center text-lg sm:text-xl md:text-2xl py-6 text-[rgba(16,44,81,255)]">
          Enterprises are moving their business processes towards digitization,
          mobility, big data analytics, web collaboration and cloud services.
          Most of them usually do not think of enterprise IT security strategy
          as a mandatory factor and lack adequate security experts on staff.
        </p>
        <p className=" w-full text-center text-base sm:text-lg md:text-xl py-6 text-gray-500">
          This, however, makes for a poor strategy that leads nowhere.
          Businesses should recognize enterprise IT security as their priority.
          Personal data, digital intellectual property, enterprise cyber
          infrastructure and even business-critical apps can be compromised with
          network attacks, break-ins, inadvertent security lapses and vulnerable
          web services etc.
          <br />
          <br /> MSP provides a full range of IT relevant security services. Our
          IT Security Services offer businesses a deep, comprehensive overview
          of their vulnerability landscape in order to raise effectiveness in
          preventing advanced attacks and mitigate business risks.
        </p>
      </div>
      <div className=" my-10">
        <div className=" w-[90%] mx-auto flex flex-col-reverse lg:flex-row">
          <div className=" w-3/4 text-center">
            <h1 className=" w-full text-left text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
              Managed IT Security Services
            </h1>
            <p className=" w-full text-left text-base sm:text-lg md:text-xl py-6 text-gray-500">
              MSP offers effective, high quality solutions addressed to
              businesses that seek strategic partners to outsource their IT
              security management. Monitoring and analytics of security
              incidents, Penetration Tests, Vulnerability Scans are just some of
              our products. Comarch aligns those services directly with business
              and operational goals and assists clients in complying with their
              IT governance processes, manage corporate risk and achieve
              compliance with state laws, legal frameworks and industry
              standards.
            </p>
          </div>
          <div className=" w-1/4 p-3 m-auto">
            <img src={img1} />
          </div>
        </div>
        <div className=" w-[90%] mx-auto flex flex-col-reverse lg:flex-row">
          <div className=" w-3/4 text-center">
            <h1 className=" w-full text-left text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
              IT Security Auditing & Compliance
            </h1>
            <p className=" w-full text-left text-base sm:text-lg md:text-xl py-6 text-gray-500">
              MSP extensive experience assessing policies, processes and
              technical deployment standards against key local and international
              legal and regulatory requirements. IT Security Auditing &
              Compliance services are tailored to the client’s legal compliance
              requirements relevant to their industry.
              <br />
              <br /> Our portfolio of security services successfully helps
              businesses identify all types of system vulnerability to reduce
              the risk of data loss and unauthorized access. Since regular data
              security checks can spot potential hazards and remove them in
              time, they should make a routine process for effective protection
              of IT systems. Comarch ICT Security & Risk Department delivers a
              vast range of IT Security Audit services to meet market needs,
              customer expectations and deliver great intelligence.
            </p>
          </div>
          <div className=" w-1/4 p-3 m-auto">
            <img src={img2} />
          </div>
        </div>
        <div className=" w-[90%] mx-auto flex flex-col-reverse lg:flex-row">
          <div className=" w-3/4 text-center">
            <h1 className=" w-full text-left text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
              IT Security Integration and Support
            </h1>
            <p className=" w-full text-left text-base sm:text-lg md:text-xl py-6 text-gray-500">
              The rising use of MSP technologies across business is poised to
              make IT security systems much more reliable. As everyday business
              operations can be disrupted should the business fail to respond to
              a given threat in time, MSP make one of key factors in the
              effective management of information processes. MSP IT Risk &
              Security Department offers full range of Integration and Support
              services from network security solutions to Security Information
              and Event Management (SIEM) services. With a team of highly
              skilled Network and Security Engineers and years of business
              security experience, we pride ourselves on delivering solutions
              and services tailored to our clients’ expectations. We start from
              analyzing customers’ needs and then plan and deploy security
              solutions to meet all the specific requirements. Make sure not
              only your enterprise network security is at the highest level.
            </p>
          </div>
          <div className=" w-1/4 p-3 m-auto">
            <img src={img3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskSecuritySection;
