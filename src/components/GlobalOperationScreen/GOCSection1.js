import React from "react";
import img from "../../images/global-operations-center-infographic.jpg";
import img2 from "../../images/network-operations-center-infographic.jpg";
import ContacUsGif from "../../images/contactus.gif";

const GOCSection1 = () => {
  return (
    <div className=" mt-[80px]">
      <div className="w-full text-center bg-gray-200 py-10">
        <h1 className=" px-5 text-2xl sm:text-4xl md:text-5xl py-10 text-[rgba(16,44,81,255)]">
          Global Operations Center
        </h1>
        <p className=" px-5 text-xl md:text-3xl py-3 text-[rgba(16,44,81,255)]">
          Global Operations Center is like your 112 for IT related issues.
        </p>
      </div>
      <div className="w-full text-center bg-white py-10">
        <h1 className=" px-5 text-lg sm:text-xl md:text-3xl py-10 text-[rgba(16,44,81,255)]">
          What is a Global Operations Center?
        </h1>
        <p className=" px-5 sm:text-lg md:text-xl py-3 text-gray-400 text-left">
          Comarch Global Operations Center presents a new, comprehensive
          approach to network monitoring and customer support. It is a single
          point of contact for our customers, combining all the advantages of a
          network operations center (NOC) and service desk into one,
          well-functioning body.
        </p>
        <p className=" px-5 sm:text-lg md:text-xl py-3 text-gray-400 text-left">
          Comarch Global Operations Center is a physical place, a secure room,
          where administrators can keep an eye on the client’s network, all
          devices connected to it, various elements of IT infrastructure,
          operating systems and application platforms. Our experienced engineers
          monitor, supervise and maintain the network and other elements of each
          client’s IT environment and resolve issues that may arise.
        </p>
        <p className=" px-5 sm:text-lg md:text-xl py-3 text-gray-400 text-left">
          A single point of contact makes reporting issues easier and more
          effective than ever. Your employees do not have search for the right
          number for a helpdesk, but have one direct route to report any
          IT-related problem, get information or ask even the simplest question.
          Neither do they have to check different systems to track ticket
          status, as our engineers take control of the whole ticket lifecycle;
          they pick up the phone, create the ticket and resolve the issue or, if
          this is not possible, escalate the problem to the next support line or
          to a third-party (telco operator or device manufacturer). All tickets
          are registered in JIRA, a transparent, customized, open-source tool
          which is used all over the world.
        </p>
      </div>
      <div className="w-full  bg-gray-200 py-10">
        <h1 className=" px-5 text-center text-2xl sm:text-4xl md:text-5xl py-10 text-[rgba(16,44,81,255)]">
          NOC Framework
        </h1>
        <div className=" flex flex-col sm:flex-row ">
          <div className=" w-full my-auto sm:w-1/4 p-3">
            <img src={img} className=" max-w-[280px] max-h-[280px]" />
          </div>
          <div className=" w-full text-left sm:w-3/4 px-3 my-auto text-[rgba(16,44,81,255)]">
            <p>
              As a global provider of IT products and services, Comarch was an
              early adopter of the ITIL-approach, which is based on a collection
              of best practices that allow us to deliver customized support
              while maintaining high operational efficiency. Driven by this
              framework we continuously improve our Network Operations Center
              and service desk communication both internally and externally. For
              our Global Operations Center we created an agile approach to
              network monitoring services. This makes everything easy to
              customize in accordance with a particular client’s business needs.
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full">
        <h1 className=" px-5 text-center text-2xl sm:text-4xl md:text-5xl py-10 text-[rgba(16,44,81,255)]">
          How will You Benefit from a Global Operations Center?
        </h1>
        <div className="w-full py-10">
          <div className=" flex flex-col">
            <div className=" w-full md:w-[50%] mx-auto p-3">
              <img src={img2} />
            </div>
            <div className=" w-full md:w-[50%] mx-auto text-left px-3 text-[rgba(16,44,81,255)]">
              <div className=" flex flex-row py-3 gap-[4px]">
                <div>1</div>
                <div>
                  Single point of contact makes communication easier and more
                  efficient
                </div>
              </div>
              <div className=" flex flex-row py-3 gap-[4px]">
                <div>2</div>
                <div>
                  Monitoring of infrastructure availability and performance
                  around the clock
                </div>
              </div>
              <div className=" flex flex-row py-3 gap-[4px]">
                <div>3</div>
                <div>
                  A wide range of monitoring services with deep network and IT
                  environment insight
                </div>
              </div>
              <div className=" flex flex-row py-3 gap-[4px]">
                <div>4</div>
                <div>
                  Early detection of any potential threats with 100% uptime
                  maintenance
                </div>
              </div>
              <div className=" flex flex-row py-3 gap-[4px]">
                <div>5</div>
                <div>
                  No additional costs associated with training and
                  certifications of employees
                </div>
              </div>
              <div className=" flex flex-row py-3 gap-[4px]">
                <div>6</div>
                <div>
                  Comprehensive control of the IT environment, allowing you to
                  make strategic decisions
                </div>
              </div>
              <div className=" flex flex-row py-3 gap-[4px]">
                <div>7</div>
                <div>Increased security for your IT environment</div>
              </div>
              <div className=" flex flex-row py-3 gap-[4px]">
                <div>8</div>
                <div>
                  Full monthly and quarterly reports on the reliability and
                  stability of your IT system and infrastructure
                </div>
              </div>
              <div className=" flex flex-row py-3 gap-[4px]">
                <div>9</div>
                <div>
                  Your IT staff can focus on more important or neglected
                  activities/projects
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <img src={ContacUsGif} />
        </div>
      </div>
    </div>
  );
};

export default GOCSection1;
