import React from "react";
import svg1 from "../../images/aws-migration-feat.svg";

const CloudMigSection1 = () => {
  return (
    <div className=" w-full mt-[80px]">
      <div className="w-full text-center bg-gray-200 py-10">
        <h1 className=" px-5 text-xl sm:text-3xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Save Time, Money and Stress When Migrating to the Cloud
        </h1>
        <p className=" px-5 text-base md:text-lg py-3 text-[rgba(16,44,81,255)]">
          Let MSP Seamlessly Migrate Your Servers and Data to the Cloud
        </p>
      </div>
      <div className="w-[80%] mx-auto">
        <h1 className=" w-full text-center text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Securely Connect to AWS, Azure and Other Cloud Hosting Models While
        </h1>
        <h1 className=" w-full text-center text-lg sm:text-xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          Protecting Your Workloads and Automating Your Cloud Services
        </h1>
        <div className=" text-gray-400 py-10">
          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              Looking for a fast, convenient, affordable way to begin taking
              advantage of the many benefits of cloud computing?
            </div>
          </div>

          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              Need a comprehensive Cloud Migration Service that is customized to
              deliver exactly what you need – from strategic planning to
              application and data migration?
            </div>
          </div>
          <div className=" flex flex-row py-3">
            <div>-</div>
            <div>
              Want to ensure you get the efficient, integrated cloud migration
              approach you need to stay competitive in today’s rapidly evolving
              digital environment?
            </div>
          </div>
        </div>
      </div>
      <div className=" w-1/2 h-1 mx-auto bg-[rgba(16,44,81,255)] my-7"></div>
      <div className="w-full bg-gray-200 mt-5">
        <h1 className=" text-center text-2xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          The Best Consulting + the Best Technology + the Best Execution
        </h1>
        <br />
        <h1 className=" text-center text-2xl md:text-4xl py-6 text-[rgba(16,44,81,255)]">
          = The Absolute Best Outcome
        </h1>
        <div className="flex flex-col sm:flex-row">
          <div className=" w-[80%] pl-6 md:pl-0 md:w-1/2  mx-auto text-gray-500 py-10 flex flex-col justify-center md:items-start">
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Experience fast cloud migration using proven-effective
                strategies and techniques
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Take advantage of all the best cloud features for your business
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Keep your data secure at all times</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Eliminate complexity and confusion so you can begin using cloud
                services quickly and easily
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                Ensure a smooth migration process no matter how complex your
                infrastructure or how unfamiliar you are with the cloud
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                We know what every business must know to be successful and
                maximize the benefits of cloud computing and we will share it
                all with you!
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                We will give you a complete blueprint for how to migrate to and
                best utilize the cloud model of your choice.
              </div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>
                We also walk you through the complete migration process step by
                step AND we provide training so that you can make the most of
                cloud services going forward
              </div>
            </div>
          </div>
          <div className=" w-full md:w-1/4 min-h-full flex justify-center items-center py-5">
            <img src={svg1} className=" w-[280px] p-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudMigSection1;
