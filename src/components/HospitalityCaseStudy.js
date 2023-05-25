import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HospitalityCaseStudy = () => {
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
                Network would be deployed in both outdoor and indoor locations
                and would need to blanket the entire city in wireless
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                With thousands of users connecting daily, needed a reliable and
                resilient network that could handle highly dense and dynamic
                environments
              </div>
            </div>
            <div>
              <p className=" text-2xl ">
                <b className=" text-5xl text-blue-700">"</b>We got more than we
                asked for with the impressive Meraki functionalities, complete
                security, and almost zero on-site equipment. It’s the easiest
                solution I’ve ever used.
              </p>
            </div>
          </div>
          <div>
            <h1 className=" px-5 text-3xl sm:text-4xl md:text-5xl py-10 text-[rgba(16,44,81,255)] text-center">
              Why Cisco Meraki
            </h1>
          </div>
          <div className=" w-[80%] mx-auto text-gray-500">
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Complete wireless solution with built-in security, visibility,
                and network optimization creates a reliable city-wide
                infrastructure
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Centralized management of indoor and outdoor APs throughout the
                city allows admins to remain in control without being on-site
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Easily customizable configurations allow admins to update
                existing SSIDs or create new SSIDs for local businesses or
                events
              </div>
            </div>
          </div>
          <div>
            <h1 className=" px-5 text-3xl sm:text-4xl md:text-5xl py-10 text-[rgba(16,44,81,255)] text-center">
              The Deployment
            </h1>
          </div>
          <div className=" w-[80%] mx-auto text-gray-500">
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Deployed 55 indoor and outdoor APs in Weert within two months
                and are expanding to other villages, parks, and shopping areas
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Location-specific APs tagged to broadcast certain SSIDs with
                customized splash pages, L7 firewall rules, and bandwidth limits
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Network segmented by usage, whether for free guest access or
                secure wireless for ATM machines and other financial services
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                WIDS/WIPS continually running on each AP’s dedicated security
                radio to detect and neutralize wireless threats
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Auto RF optimization ensures performance in high density areas
                by monitoring channel utilization, signal strength, and more
              </div>
            </div>
          </div>
          <div>
            <h1 className=" px-5 text-3xl sm:text-4xl md:text-5xl py-10 text-[rgba(16,44,81,255)] text-center">
              Result
            </h1>
          </div>
          <div className=" w-[80%] mx-auto text-gray-500">
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Seamless network permits users to access relevant information as
                they arrive and travel between destinations in the city
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                An average of 5000 users connect to each AP daily, transferring
                hundreds of gigabytes of data every month
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Location analytics at events, like marathons, provide
                information on participant positions and estimated checkpoint
                times
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Integration with city audio systems permits admins to use
                wireless to play music or to issue public safety announcements
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Built-in billing options allow the city to require users to pay
                for wireless access over a secure connection at specific events
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                City-wide WiFi provides valuable services to visitors, citizens,
                and businesses, encouraging tourism and a better economy
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Built-in MDM allows admins to centrally monitor mobile devices
                and keep them up to date with the latest applications and
                content
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HospitalityCaseStudy;
