import React from "react";
import itimage from "../../images/it-advice.jpg";
import itimage2 from "../../images/it-consulting-services.jpg";

const ITConsultSection1 = () => {
  return (
    <div className=" w-full mt-[80px] mb-[80px]">
      <div className="w-full text-center bg-gray-200 py-10">
        <h1 className=" px-5 text-xl sm:text-3xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          IT CONSULTING SERVICES
        </h1>
        <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
          We deliver best-practices solutions to meet your IT needs—including
          technology, strategy, and roadmap development.
        </p>
      </div>
      <div className=" w-full flex flex-col gap-5">
        <diiv className=" w-full flex flex-col md:flex-row mx-auto justify-center items-center">
          <div className=" w-full h-fit md:w-1/4 my-auto  flex gap-5 justify-center items-center">
            <img src={itimage} className=" max-w-[280px] max-h-[280px] p-5" />
          </div>
          <div className="w-full md:w-3/4  md:text-left text-center">
            <h1 className=" px-3 sm:px-5 text-base sm:text-xl md:text-2xl py-6 text-[rgba(16,44,81,255)]">
              IT Consulting Companies providing IT Support and Advice
              Expert-Driven IT Consulting Services For Business Growth
            </h1>
            <p className=" px-3 sm:px-5 text-xs sm:text-sm md:text-base py-3 text-[rgba(16,44,81,255)]">
              The IT consultants and strategists at MSP Services help
              organizations leverage emerging technologies to fuel their digital
              transformation efforts. Our IT Consulting Services use Agile
              design principles and empower in-house teams to adopt the right IT
              tools and methodologies for business growth.
            </p>
            <p className=" px-3 sm:px-5 text-xs sm:text-sm md:text-base py-3 text-[rgba(16,44,81,255)]">
              At Global IT Services, experienced IT strategists and consultants
              steer your business growth by delivering measurable, real-time,
              result-oriented enterprise IT services. We integrate technology
              and solutions in all areas of data insights, business
              applications, cloud advancement, and cybersecurity to give your
              organization the competitive edge.
            </p>
          </div>
        </diiv>
        <diiv className=" w-full flex flex-col md:flex-row-reverse mx-auto justify-center items-center">
          <div className=" w-full h-fit md:w-1/4 my-auto  flex gap-5 justify-center items-center">
            <img src={itimage2} className=" max-w-[280px] max-h-[280px] p-5" />
          </div>
          <div className="w-full md:w-3/4  md:text-left text-center">
            <h1 className=" px-3 sm:px-5 text-base sm:text-xl md:text-2xl py-6 text-[rgba(16,44,81,255)]">
              Our IT Consulting Services
            </h1>
            <p className=" px-3 sm:px-5 text-xs sm:text-sm md:text-base py-3 text-[rgba(16,44,81,255)]">
              Integrate disruptive technologies to impact IT landscapes and
              business models.
            </p>
            <div className=" px-4 sm:px-6 ">
              <div className=" flex flex-row py-3 text-left">
                <div>-</div>
                <div>
                  Place organizations ahead in the race by using a holistic
                  approach to solving IT problems.
                </div>
              </div>
              <div className=" flex flex-row py-3 text-left">
                <div>-</div>
                <div>Develop strategies to optimize quality and costs.</div>
              </div>
              <div className=" flex flex-row py-3 text-left">
                <div>-</div>
                <div>Generate new revenue streams to ensure a higher ROI.</div>
              </div>
              <div className=" flex flex-row py-3 text-left">
                <div>-</div>
                <div>
                  Bring in more flexibility and productivity to elevate business
                  efficiency.
                </div>
              </div>
              <div className=" flex flex-row py-3 text-left">
                <div>-</div>
                <div>
                  Impact the full spectrum of industry verticals with best IT
                  benefits and strategic solutions.
                </div>
              </div>
              <div className=" flex flex-row py-3 text-left">
                <div>-</div>
                <div>
                  Focus on current and future needs to provide objective
                  recommendations based on the latest IT approaches and ideas.
                </div>
              </div>
              <div className=" flex flex-row py-3 text-left">
                <div>-</div>
                <div>
                  Benefit companies by introducing them to new markets, capture
                  higher market shares, and encourage better revenue growth
                  models.
                </div>
              </div>
              <div className=" flex flex-row py-3 text-left">
                <div>-</div>
                <div>
                  Develop intelligent technology roadmaps to match your business
                  needs.
                </div>
              </div>
            </div>
          </div>
        </diiv>
      </div>
    </div>
  );
};

export default ITConsultSection1;
