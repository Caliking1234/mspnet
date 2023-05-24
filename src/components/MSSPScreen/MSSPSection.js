import React from "react";
import svg1 from "../../images/Managed-IT-Security-Services.png";
import svg2 from "../../images/managed-it-security-services-benefits.png";

const MSSPSection = () => {
  return (
    <div className=" mt-[80px]">
      <div className="w-full text-center bg-gray-200 py-10">
        <h1 className=" px-5 text-2xl sm:text-4xl md:text-5xl text-[rgba(16,44,81,255)]">
          Managed Security
        </h1>
        <h1 className=" px-5 text-2xl sm:text-4xl md:text-5xl text-[rgba(16,44,81,255)]">
          Service Provider
        </h1>
      </div>
      <div>
        <div className="w-full text-center bg-gray-200 py-10">
          <h1 className=" w-[90%] mx-auto px-5 text-lg sm:text-xl md:text-2xl pt-10 pb-5 text-[rgba(16,44,81,255)]">
            Managed IT Security Sevices is to help you organization to manage
            overall risk and improve security strategy
          </h1>
          <p className=" w-[90%] mx-auto px-5 text-base text-left md:text-xl py-3 text-[rgba(16,44,81,255)]">
            Is your IT budget or limited staff a challenge? Do you wonder how
            you can provide advanced security, compliance and visibility?
            Regardless of what their business size, industry and geography are,
            most organizations face similar challenges daily. However, with
            state-of-the-art tools, innovative technology and unmatched
            expertise, Comarch’s Managed IT Security services let you focus on
            your core business. What's the biggest challenge to your business?
            Do you know how important information security management services
            are for your business? Is it strengthening your information security
            defenses? Cost optimization? Each business is different, so we
            tailor full-scale IT security management services to individual
            requirements.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className=" w-[80%] pl-6 md:pl-0 md:w-1/2  mx-auto text-gray-500 py-10 flex flex-col justify-center md:items-start">
            <h1 className=" text-xl py-3">
              Managed security services - scope of services
            </h1>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                <b>Security Operations Center </b> – Stay in control 24/7
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                <b>
                  Security Monitoring and Security Information and Event
                  Management
                </b>
                – Effectively monitor the security of IT environments to
                identify, analyze and respond to potential security threats in
                time
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                <b>Vulnerability Tracking and Management</b> – Verify the
                security status of your IT environment with routine
                vulnerability scans;
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                <b>Patch Management</b> – Compile patch- and
                vulnerability-related information from various sources,
                including vendor sites, security newsletters and vulnerability
                databases;
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                <b>Compliance Management</b> – Improve compliance with our
                assistance and identify and deploy best security practices and
                regulatory requirements;
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                <b>IT risk management</b> – Pro-actively manage open threats by
                controls, corrective actions and other measures to mitigate
                risks;
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                <b>Business Continuity Management</b> – Determine the maturity
                of your controls for Information Security & Business Continuity.
              </div>
            </div>
          </div>
          <div className=" w-full md:w-1/4 min-h-full flex justify-center items-center py-5">
            <img src={svg1} className=" w-[280px] p-5" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className=" w-[80%] pl-6 md:pl-0 md:w-1/2  mx-auto text-gray-500 py-10 flex flex-col justify-center md:items-start">
            <h1 className=" text-xl py-3">Benefits</h1>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                <b>Security Operations Center </b> – Stay in control 24/7
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Raise the security and efficiency of your IT infrastructure. Our
                security specialists will provide you with expertise in
                high-value managed security services and analysis of security
                events;
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>24/7 security monitoring for relevant ICT systems;</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Access to professional consultants with extensive experience
                delivering solutions for industry leaders;
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Lower cost due to shared resources rather than compromised
                quality of services and security;
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Lower risk – Reliable protection and high level of service
                quality based on SLA;
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                We think globally and act locally – In delivering our security
                operations, we always stay close to your business and provide
                you with anything you need wherever you need that.
              </div>
            </div>
          </div>
          <div className=" w-full md:w-1/4 min-h-full flex justify-center items-center py-5">
            <img src={svg2} className=" w-[280px] p-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MSSPSection;
