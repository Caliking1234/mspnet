import React from "react";
import Img1 from "../../images/it-integration.png";
import Img2 from "../../images/icn-rocket-ltbl-20.svg";
import Img3 from "../../images/Managed-IT-Security-Services.png";
import { Link } from "react-router-dom";

const ITMigrationSection = () => {
  return (
    <div className=" mt-[80px]">
      <div className="w-full text-center bg-gray-200 py-5">
        <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
          Ensure a Smooth and Streamlined Migration Reduce the stress migration
          can cause and minimize its disruption to operations with EI’s
          Migration Services
        </p>
      </div>
      <div className="w-[80%] mx-auto">
        <h1 className=" w-full text-center text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Increase Migration Efficiency and Ease the Pressure on Your Internal
          IT Team
        </h1>
        <p className=" w-full text-center text-lg sm:text-xl md:text-2xl py-6 text-gray-500">
          Migrations are often among the riskiest undertakings for a business.
          There can be time and financial challenges. There can be complex
          technological issues.
          <br />
          <br /> The truth is there is a lot for businesses to be concerned
          about when it comes to migrations. Besides technical, cost and
          schedule risks, there can also be risk found in training, operations
          and much more.
          <br />
          <br /> EI helps businesses avoid these risks and get back to business
          as usual as fast as possible by designing, testing and executing all
          aspects of a migration.
          <br />
          <br /> Let us do the dirty work for you!
        </p>
      </div>
      <div className="w-full px-3 mx-auto bg-gray-200">
        <h1 className=" w-full text-center text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          A Successful Migration Starts With EI!
        </h1>
        <p className=" w-full text-center text-lg sm:text-xl md:text-2xl py-6 text-gray-500">
          Whether you are moving to a new building and need a new system or you
          are upgrading your network, EI helps you avoid the headaches and
          stresses that often accompany a migration.
          <br />
          <br /> Our migration experts study your system and goals and develop a
          comprehensive execution plan that overcomes challenges and allows you
          to reach your goals quickly and easily.
          <br />
          <br /> At EI, we’ve got the migration process down to a science. We’re
          adept at taking care of everything behind the scenes, which leaves
          your staff free to carry on as usual. The only time they’ll notice a
          difference is when the new system comes online.
          <br />
          <br /> We’ve performed hundreds of smooth, successful migrations that
          have enabled businesses to maintain user experience, achieve
          resiliency, implement network segmentation and centralize monitoring
          and operations.
          <br />
          <br /> In other words, we’ve helped companies do business better – and
          we are confident we can help you as well.
        </p>
      </div>
      <div>
        <div className="w-full text-center py-5">
          <h1 className=" w-full text-center text-3xl font-extrabold py-5 text-[rgba(16,44,81,255)]">
            Our Migration Services
          </h1>
        </div>
        <div className=" py-5 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          <div className=" w-[260px] h-[260px] mx-auto group [perspective:1000px] ">
            <div className=" text-center w-[260px] h-[260px] relative [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] transition-transform duration-700 delay-100 rotate-180">
              <div className=" flex flex-col justify-center items-center  text-xl h-[260px] w-[260px] absolute  [transform:rotate(180deg)] ">
                <img className=" w-[120px]" src={Img1} />
                <h1>Cloud Migration</h1>
              </div>
              <div className="flex flex-col items-center justify-around text-xs px-2 py-6 h-[260px] w-[260px]  bg-[rgba( bg-[rgba(16,44,81,255)] text-white absolute [transform:rotateX(180deg)] [backface-visibility:hidden]">
                <p>
                  Get the affordable, secure, professional service you need to
                  migrate your servers and data to the cloud. EI allows you to
                  securely connect to AWS, Azure and other cloud hosting models
                  while protecting your workloads and automating your cloud
                  services.
                </p>
                <Link to="/cloud-migration">
                  <button className=" w-28 h-10 text-white border-2 border-solid border-white rounded-md">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className=" w-[260px] h-[260px] mx-auto group [perspective:1000px] ">
            <div className=" text-center w-[260px] h-[260px] relative [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] transition-transform duration-700 delay-100 rotate-180">
              <div className=" flex flex-col justify-center items-center  text-xl h-[260px] w-[260px] absolute  [transform:rotate(180deg)] ">
                <img className=" w-[120px]" src={Img2} />
                <h1>Network Migration</h1>
              </div>
              <div className="flex flex-col items-center justify-around text-xs px-2 py-6 h-[260px] w-[260px]  bg-[rgba( bg-[rgba(16,44,81,255)] text-white absolute [transform:rotateX(180deg)] [backface-visibility:hidden]">
                <p>
                  Get the affordable, secure, professional service you need to
                  migrate your servers and data to the cloud. EI allows you to
                  securely connect to AWS, Azure and other cloud hosting models
                  while protecting your workloads and automating your cloud
                  services.
                </p>
                <Link to="/network-migration">
                  <button className=" w-28 h-10 text-white border-2 border-solid border-white rounded-md">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className=" w-[260px] h-[260px] mx-auto group [perspective:1000px] ">
            <div className=" text-center w-[260px] h-[260px] relative [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] transition-transform duration-700 delay-100 rotate-180">
              <div className=" flex flex-col justify-center items-center  text-xl h-[260px] w-[260px] absolute  [transform:rotate(180deg)] ">
                <img className=" w-[120px]" src={Img3} />
                <h1>System Migration</h1>
              </div>
              <div className="flex flex-col items-center justify-around text-xs px-2 py-6 h-[260px] w-[260px]  bg-[rgba( bg-[rgba(16,44,81,255)] text-white absolute [transform:rotateX(180deg)] [backface-visibility:hidden]">
                <p>
                  Get the affordable, secure, professional service you need to
                  migrate your servers and data to the cloud. EI allows you to
                  securely connect to AWS, Azure and other cloud hosting models
                  while protecting your workloads and automating your cloud
                  services.
                </p>
                <Link to="/system-migration">
                  <button className=" w-28 h-10 text-white border-2 border-solid border-white rounded-md">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center bg-gray-200 py-5">
        <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
          Here are just of few of the many benefits you can receive from our
          migration services:
        </p>
      </div>
      <div className=" flex flex-col lg:flex-row items-center justify-center lg:justify-around font-bold gap-6 text-gray-500 my-5">
        <div className=" w-[80%] lg:w-[300px] px-3">
          <div className="  py-3 text-sm">
            <li className=" list-disc ">
              Get your migration completed on time and on budget
            </li>
          </div>
          <div className="  py-3 text-sm">
            <li className=" list-disc ">
              Save money on the cost of your migration
            </li>
          </div>
          <div className="  py-3">
            <li className=" list-disc text-sm">
              Enjoy accelerated completion compared to when done in-house
            </li>
          </div>
          <div className="  py-3">
            <li className=" list-disc text-sm">
              Maximize operational efficiency by controlling employee access
            </li>
          </div>
        </div>
        <div className=" w-[80%] lg:w-[300px] px-3">
          <div className="  py-3">
            <li className=" list-disc text-sm">
              Transfer data storage and file management to the cloud
            </li>
          </div>
          <div className="  py-3">
            <li className=" list-disc text-sm">
              Get better prepared to meet current and future business demands
            </li>
          </div>
          <div className="  py-3">
            <li className=" list-disc text-sm">
              Open your business to new revenue sources
            </li>
          </div>
        </div>
        <div className=" w-[80%] lg:w-[300px] px-3">
          <div className="  py-3">
            <li className=" list-disc text-sm ">
              Enjoy fast, substantial and long-running ROI
            </li>
          </div>
          <div className="  py-3">
            <li className=" list-disc text-sm">
              Take advantage of all the best AWS features for your business
            </li>
          </div>
          <div className="  py-3">
            <li className=" list-disc text-sm">
              Eliminate complexity and confusion from the cloud
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITMigrationSection;
