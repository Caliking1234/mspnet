import React from "react";
import svg1 from "../../images/icn-expert-ltbl-20.svg";
import svg2 from "../../images/icn-rocket-ltbl-20.svg";
import svg3 from "../../images/icn-expanded-vision-ltbl-20.svg";
import svg4 from "../../images/icn-report-analytics-verified-ltbl-20.svg";
import svg5 from "../../images/icn-checklist-verified-ltbl-20.svg";
import svg6 from "../../images/icn-cir-expertise-ltbl-20.svg";

const NetworkMigrationSection2 = () => {
  return (
    <div>
      <div className=" w-full text-center mt-10">
        <h1 className=" w-[100%] px-3 mx-auto text-2xl sm:text-3xl  font-bold">
          Why You Need Our Network Migration Service
        </h1>
        <div className="w-[90%] mx-auto flex flex-col gap-5 justify-items-center py-10">
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg1} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                A PLAN THAT SIMPLIFIES AND ACCELERATES:
              </h1>
              <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
                Our network migration experts study your network and goals and
                develop a comprehensive execution plan that overcomes challenges
                and allows you to reach your goals as fast as possible.
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg2} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                THE ULTIMATE SOLUTION:
              </h1>
              <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
                We’ve conducted numerous migrations and have experience dealing
                with a wide variety of situations. We’ll gather baseline data,
                determine involved systems and relevant processes and then use
                our knowledge to create the best possible migration solution for
                your business.
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg3} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                ACCURATE TESTING:
              </h1>
              <p className=" text-sm sm:text-base text-center md:text-left text-gray-400">
                We test methodologies and take applications through a process to
                ensure that each step has been laid out correctly to ensure a
                full migration of your data can be achieved quickly and easily.
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg4} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                FULL MONITORING:
              </h1>
              <p className=" text-sm sm:text-base  text-center md:text-left text-gray-400">
                Continually monitoring the stability and security of your
                network during and after the migration is a must. We handle this
                alleviating your team of the burden.
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row ">
            <div className=" w-[100%] md:w-1/4 flex justify-items-center">
              <img src={svg5} className="max-w-[100px] mx-auto" />
            </div>
            <div className="w-[100%] px-5 md:w-3/4">
              <h1 className="text-center md:text-left text-xl py-5">
                CLEAR COMMUNICATION:
              </h1>
              <p className=" text-sm sm:text-base  text-center md:text-left text-gray-400">
                We outline a timeframe for the migration and keep everyone
                informed on when deployments will occur. We also inform
                employees about the scope of the project and the benefits it
                will bring them to increase buy-in.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto py-7">
        <p className="text-center text-base sm:text-xl font-customised2 text-gray-400 py-3">
          ENSURE A SMOOTH NETWORK TRANSITION EAGER TO HAVE YOUR MIGRATION
          COMPLETED ON SCHEDULE AND WITH NO
          <br /> UNPLEASANT
          <br /> SURPRISES? WANT TO SAVE MONEY ON MIGRATION EXPENSES AND AVOID
          TOO MUCH COSTLY DOWNTIME?
        </p>
      </div>
      <div className=" w-[100%] sm:w-[80%] sm:mx-auto">
        <div className="w-full px-7">
          <h1 className="text-center sm:text-left text-xl py-5">
            EXPERT NETWORK MIGRATION SOLUTIONS
          </h1>
          <p className="text-center sm:text-left text-xs sm:text-base text-gray-400 py-3">
            While network migrations can come with a variety of challenges,
            three of the biggest are getting a proper network assessment at the
            beginning of the process, deploying the solution on the best
            schedule and then monitoring the solution after the migration. At
            MSP, we are experts at all of these things – allowing you to put
            your personnel to work on other important matters.
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row py-5 gap-5">
          <div className="w-full sm:w-1/4">
            <img src={svg6} className="max-w-[100px] mx-auto" />
          </div>
          <div className=" w-full text-xs sm:text-base sm:w-3/4 text-center sm:text-left px-4">
            <p className="text-gray-400">
              As technology continues to advice, network migrations are only
              going to become more complex and financially challenging. MSP
              gives you the well thought out plan and expert guidance you need
              to overcome any obstacles. We study your organization and develop
              a migration plan that offers minimal disruptions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkMigrationSection2;
