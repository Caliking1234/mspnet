import React from "react";

const SDRequirementsSection = () => {
  return (
    <div className=" mt-[80px]">
      <div className="w-full text-center bg-gray-200 py-10">
        <h1 className=" px-5 text-3xl sm:text-4xl md:text-5xl py-10 text-[rgba(16,44,81,255)]">
          SD-WAN Requirements
        </h1>
        <p className=" px-5 text-sm sm:text-lg md:text-xl py-3 text-[rgba(16,44,81,255)]">
          Changing times call for changing WANs. Modern WAN network technologies
          enable you to optimize cost and performance. Examples include hybrid
          networks, SD-WAN, LTE and WAN-OP as a service. Technologies such as
          these enable you to supplement or often replace your MPLS networks
          with inexpensive internet access circuits, reduce bandwidth needs to
          dramatically increase performance, activate high-performance broadband
          connections in minutes, automatically route traffic to the best
          resource, and provide seamless fail-over in less than a second.
        </p>
      </div>
      <div className=" flex flex-col gap-5 w-[80%] mx-auto">
        <div className="">
          <h1 className=" px-5 text-base sm:text-lg md:text-xl py-5 text-[rgba(16,44,81,255)]">
            Ensure your WAN evolves with your business
          </h1>
          <p className=" px-5 text-sm sm:text-base md:text-lg py-3 text-gray-500">
            You must take into account all of today’s applications–as well as
            those that will have demands in the future.
          </p>
          <div className=" pl-5  mx-auto text-gray-500 py-5 flex flex-col justify-center">
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>What applications will your users want?</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>What performance levels will they require?</div>
            </div>
            <div className=" flex flex-row py-3">
              <div>-</div>
              <div>Which applications take priority in case of a conflict?</div>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className=" px-5 text-base sm:text-lg md:text-xl py-5 text-[rgba(16,44,81,255)]">
            Pay only for what you need
          </h1>
          <p className=" px-5 text-sm sm:text-base md:text-lg py-3 text-gray-500">
            Just a few years ago, the majority of enterprise traffic would run
            on an MPLS network, an IPSEC VPN or both. Today, with SaaS apps
            hosted in the cloud, it’s essential to consider MPLS and internet
            bandwidth together, not separately. A WAN transformation to all
            internet circuits may make sense, depending on your site locations
            and latency.
          </p>
          <p className=" px-5 text-sm sm:text-base md:text-lg py-3 text-gray-500">
            But, unless your bandwidth requirements are based on empirical data,
            you will likely be paying for more than you need, which every
            carrier salesperson prefers.
          </p>
        </div>
        <div className="">
          <h1 className=" px-5 text-base sm:text-lg md:text-xl py-5 text-[rgba(16,44,81,255)]">
            Start with understanding traffic characteristics
          </h1>
          <p className=" px-5 text-sm sm:text-base md:text-lg py-3 text-gray-500">
            Understanding traffic characteristics is the foundation for
            determining your WAN requirements. Test assumptions about priority
            data–and bandwidth needs using empirical data. Take note of peak
            period demand–as well as ongoing needs. To do the job correctly, you
            should use WAN performance measurement tools. Many are free such as
            Cacti, NTOP and MRTG.
          </p>
        </div>
        <div className="">
          <h1 className=" px-5 text-base sm:text-lg md:text-xl py-5 text-[rgba(16,44,81,255)]">
            Get the job done, faster, and at a lower cost than doing it
            yourself.
          </h1>
          <p className=" px-5 text-sm sm:text-base md:text-lg py-3 text-gray-500">
            With the right network design, you can get incredible uptime and
            security. The pros at SD-WAN-Experts can help you get the job done,
            faster and at a lower cost than doing the job yourself
          </p>
          <p className=" px-5 text-sm sm:text-lg md:text-xl py-3 text-gray-500">
            As you can see, there are a variety of factors to consider when you
            develop your WAN requirements. The pros at SD-WAN-Experts can help
            you get the job done, faster and at a lower cost than doing the job
            yourself. Give us a call!
          </p>
        </div>
        <div className="">
          <h1 className=" px-5 text-base sm:text-lg md:text-xl py-10 text-[rgba(16,44,81,255)]">
            Identify the best technology for your business needs
          </h1>
          <p className=" px-5 text-sm sm:text-lg md:text-xl py-3 text-gray-500">
            The real challenge is consistent performance. Internet performance
            has improved dramatically over the past decade. Today, it often
            rivals MPLS service performance. Identify the best technology
            solution, whether that is SD-WAN, MPLS, or a hybrid of both.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SDRequirementsSection;
