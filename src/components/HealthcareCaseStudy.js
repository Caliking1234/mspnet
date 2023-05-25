import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HealthcareCaseStudy = () => {
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
            <p className=" w-full text-left px-3">
              Langley School is a fee-paying educational institution in the east
              of England, and is home to 765 students and boarders. There are
              many reasons why parents choose Langley, ranging from the
              educational excellence; the two 100-acre sites of countryside; or
              the school’s values of kindness, confidence, curiosity, and
              integrity.
              <br />
              <br /> Until recently, very few would have scored Langley highly
              in terms of network connectivity. The school, occupying two sites
              on the outskirts of Norwich, lacked functional Wi-Fi. Though there
              was a desktop in every classroom, internet access was only
              possible through one of the school’s thirteen IT suites for
              students.
              <br />
              <br /> “Technology was not regarded as essential to a good
              education,” said Sam Youngs, Head of Digital Services at Langley
              School. “Connectivity in our rural locations was often limited to
              3G, and only accessible from the IT suites.”
            </p>
            <div>
              <p className=" text-2xl py-5">
                <b className=" text-5xl text-blue-700">"</b>We needed the
                network to open up new possibilities for the school, for
                teaching, and for students.
              </p>
            </div>
            <p className=" w-full text-left px-3">
              The pandemic changed everything: many students were required to be
              taught remotely, Langley had to govern capacity in certain rooms,
              and events, including Parents Evenings, had to be held virtually.
              Overnight the school recognised it needed a new level of
              flexibility, and that a network upgrade was key to building a
              modern approach to learning.
              <br />
              <br /> “The future arrived very quickly,” said Youngs. “We needed
              the network to open up new possibilities for the school, for
              teaching, and for students.”
            </p>
          </div>
          <div>
            <h1 className=" px-5 text-3xl sm:text-4xl md:text-5xl py-10 text-[rgba(16,44,81,255)] text-center">
              solution
            </h1>
          </div>
          <div className=" w-[80%] mx-auto text-gray-500">
            <p className=" w-full text-left px-3">
              Langley had previously established budget priorities that resulted
              in underinvesting in the network, according to Youngs. The
              strategic importance of the upgrade required the school to think
              seriously about a long-term solution.
              <br />
              <br /> “We looked at several possibilities, but my experience with
              Cisco Meraki gave me the confidence that Meraki would be the best
              option. Given the small size of the team, I wanted a solution that
              would be easy to manage on the fly where I could scale up new
              networks as required,” he explained. “What we needed to avoid was
              complex configuration and multiple VLANs.”
              <br />
              <br /> The Meraki solution is built on MR wireless access points
              and MS series switches, with a 10-year license agreement. It
              ensures Wi-Fi connectivity throughout the two sites, both indoors
              and out.
              <br />
              <br /> “We were conscious of the significance of the investment,
              but also consider Meraki as best-of-breed,” says Youngs. “It gives
              us long-term peace of mind, no matter how the network grows.”
            </p>
          </div>
          <div>
            <h1 className=" px-5 text-3xl sm:text-4xl md:text-5xl py-10 text-[rgba(16,44,81,255)] text-center">
              Result
            </h1>
          </div>
          <div className=" w-[80%] mx-auto text-gray-500">
            <p>
              The impact is transformative. Langley has gone from a place where
              connectivity was restricted to select rooms to a flexible,
              campus-wide wireless experience. Staff and students can now work
              with tablets and laptops and classes are being held outdoors. This
              has all been achieved with no loss of control or oversight.
              <br />
              <br /> “I can now scale up a new network for a different user
              group very quickly,” says Youngs, “each with a distinct level of
              access, bandwidth, and security.” <br />
              <br />
              For example, Langley can provide more open network access for
              sixth formers (ages 16 and up), with tighter control for younger
              users. Teachers and operational staff have their own networks, and
              Youngs can also provision a network for day visitors or guests
              booking out-of-term accommodations.
              <br />
              <br />
              With clear boundaries and policies in place, the school is more
              confident in exploring possibilities. Teachers are encouraged to
              find a work style that suits them and there is no central mandate
              on how lessons should be taught. From April 2022, year three
              students and upwards will be issued devices. With a solid network
              in place, Youngs’ role, he says, is to support staff and students
              and to explore what might be possible.
              <br />
              <br /> “This is only the start. We recognise this is a journey,”
              he says. “It has become apparent that many teachers were craving a
              great wireless connection. I’ve been encouraged by the variety of
              ways the network is being used.”
              <br />
              <br /> The ideas Langley is pursuing include location-based
              teaching content—where students can access material in specific
              areas—and ring-fencing network access. The network will also
              enable Langley to host teachers who broadcast lessons into
              classrooms from overseas, extending the school’s educational
              excellence. Youngs is also looking at sensors to monitor the
              environment where equipment is located. Meraki sensors provide
              alerts for excessive temperature, moisture, and more. “We have a
              small team,” he says. “Anything that helps improve management of
              the campus is useful.” <br />
              <br />
              With students boarding (and a high percentage of international
              students), the network can also be used to support positive
              student well-being. Location tracking can pinpoint students across
              each campus and apps can be used to help students check their
              mental health.
              <br />
              <br /> “One of the most obvious differences has been the ability
              for students to hold video calls with their parents,” said Youngs.
              “Previously, they may have had to book one of the IT suites.
              Today, conversations can be more spontaneous and private. That is
              extremely important to the well-being of students and is
              reassuring for parents.”
              <br />
              <br /> “It’s my hope that our [IT] team can use Meraki products to
              change our jobs from being merely a help desk to helping our
              faculty use all kinds of technology in the classroom,” said
              Youngs. “Students are using new technology everywhere else in
              their lives, so why not at Langley, too?” By choosing Meraki,
              Langley School was quickly able to adapt to the changes the
              pandemic brought to their campuses while prioritizing remote
              education for their students, additional technological support for
              staff and faculty, and a learning experience that extends far
              beyond the classroom walls.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HealthcareCaseStudy;
