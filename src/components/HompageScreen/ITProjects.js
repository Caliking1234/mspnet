import React from "react";
import Typed from "react-typed";
import Img1 from "../../images/managed-it-security-services-benefits.png";
import Img2 from "../../images/Managed-IT-Security-Services.png";
import Img3 from "../../images/it-integration.png";
import Img4 from "../../images/it-integration-benefits.png";
import Img5 from "../../images/IT-Security-Auditing.png";
import Img6 from "../../images/IT-Security-Integration.png";
import { Link } from "react-router-dom";

const ITProjects = () => {
  return (
    <div className=" bg-white py-5">
      <h1 className=" w-full text-center text-3xl font-extrabold py-10 bg-[rgba(16,44,81,255)] text-white">
        What Is the Next IT Project You Need Help With?
      </h1>
      <div className=" py-10 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
        <div className=" w-[260px] h-[260px] mx-auto group [perspective:1000px] ">
          <div className=" text-center w-[260px] h-[260px] relative [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] transition-transform duration-700 delay-100 rotate-180">
            <div className=" flex flex-col justify-center items-center  text-xl h-[260px] w-[260px] absolute  [transform:rotate(180deg)] ">
              <img className=" w-[120px]" src={Img1} />
              <h1>IT Network Project</h1>
            </div>
            <div className="flex flex-col items-center justify-around text-xs px-2 py-6 h-[260px] w-[260px]  bg-[rgba( bg-[rgba(16,44,81,255)] text-white absolute [transform:rotateX(180deg)] [backface-visibility:hidden]">
              <p>
                When your business runs on your network, don’t you want to
                ensure it is the best it can be? We can ensure it is optimized
                and aligned with the needs of your unique business demands,
                always taking advantage of the latest innovations
              </p>
              <Link to="/it-network-project">
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
              <h1>IT Migration Project</h1>
            </div>
            <div className="flex flex-col items-center justify-around text-xs px-2 py-6 h-[260px] w-[260px]  bg-[rgba( bg-[rgba(16,44,81,255)] text-white absolute [transform:rotateX(180deg)] [backface-visibility:hidden]">
              <p>
                Let us seamlessly migrate you to Office 365, Active Directory or
                the cloud platform of your choice. We have proven processes that
                we tie into customized plans to ensure your migrations go
                smoothly without disruptions or downtime.
              </p>
              <Link to="/it-migration-project">
                <button className=" w-28 h-10 text-white border-2 border-solid border-white rounded-md">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" w-[260px] h-[260px] mx-auto group [perspective:1000px]">
          <div className=" text-center w-[260px] h-[260px] relative [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] transition-transform duration-700 delay-100 rotate-180">
            <div className=" flex flex-col justify-center items-center  text-xl h-[260px] w-[260px] absolute  [transform:rotate(180deg)] ">
              <img className=" w-[120px]" src={Img2} />
              <h1>IT Security Project</h1>
            </div>
            <div className="flex flex-col items-center justify-around text-xs px-2 py-6 h-[260px] w-[260px] bg-[rgba(16,44,81,255)] text-white absolute [transform:rotateX(180deg)] [backface-visibility:hidden]">
              <p>
                EI relies on an elite team of security experts and access to the
                industry’s most effective tools to help your organization
                tighten its security while maximizing productivity.
              </p>
              <Link to="/it-security-project">
                <button className=" w-28 h-10 text-white border-2 border-solid border-white rounded-md">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" w-[260px] h-[260px] mx-auto group [perspective:1000px]">
          <div className=" text-center w-[260px] h-[260px] relative [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] transition-transform duration-700 delay-100 rotate-180">
            <div className=" flex flex-col justify-center items-center  text-xl h-[260px] w-[260px] absolute  [transform:rotate(180deg)] ">
              <img className=" w-[120px]" src={Img4} />
              <h1>End-User Service Project</h1>
            </div>
            <div className="flex flex-col items-center justify-around text-xs px-2 py-6 h-[260px] w-[260px] bg-[rgba(16,44,81,255)] text-white absolute [transform:rotateX(180deg)] [backface-visibility:hidden]">
              <p>
                Taking care of your end users and the technology they use every
                day in order to be productive for your business is imperative.
                Whether they need help with a single piece of hardware or
                assistance setting up an entire office, we can help you take
                care of them.
              </p>
              <button className=" w-28 h-10 text-white border-2 border-solid border-white rounded-md">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className=" w-[260px] h-[260px] mx-auto  group [perspective:1000px]">
          <div className=" text-center w-[260px] h-[260px] relative [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] transition-transform duration-700 delay-100 rotate-180">
            <div className=" flex flex-col justify-center items-center  text-xl h-[260px] w-[260px] absolute  [transform:rotate(180deg)] ">
              <img className=" w-[120px]" src={Img5} />
              <h1>IT Infrastructure Project</h1>
            </div>
            <div className="flex flex-col items-center justify-around text-xs px-2 py-6 h-[260px] w-[260px] bg-[rgba(16,44,81,255)] text-white absolute [transform:rotateX(180deg)] [backface-visibility:hidden]">
              <p>
                Your IT Infrastructure is responsible for holding your business
                up? Is it strong enough?
              </p>
              <Link to="/it-constancy">
                <button className=" w-28 h-10 text-white border-2 border-solid border-white rounded-md">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" w-[260px] h-[260px] mx-auto group [perspective:1000px]">
          <div className=" text-center w-[260px] h-[260px] relative [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] transition-transform duration-700 delay-100 rotate-180">
            <div className=" flex flex-col justify-center items-center  text-xl h-[260px] w-[260px] absolute  [transform:rotate(180deg)] ">
              <img className=" w-[120px]" src={Img6} />
              <h1>Architecture Services</h1>
            </div>
            <div className=" flex flex-col items-center justify-around text-xs px-2 py-6 h-[260px] w-[260px] bg-[rgba(16,44,81,255)] text-white absolute [transform:rotateX(180deg)] [backface-visibility:hidden]">
              <p>
                Gain valuable insights, strategies and roadmaps from Enterprise
                Architects consistently on the forefront on innovation of IT.
              </p>
              <Link to="/it-architecture-project">
                <button className=" w-28 h-10 text-white border-2 border-solid border-white rounded-md">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITProjects;
