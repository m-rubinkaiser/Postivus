import john from "../assets/home/john.png";
import jane from "../assets/home/jane.png";
import micheal from "../assets/home/micheal.png";
import emily from "../assets/home/emily.png";
import brian from "../assets/home/brian.png";
import sarah from "../assets/home/sarah.png";
import linked from "../assets/home/linked.png";

export default function Team() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center mt-[60px] md:mt-[140px] mb-[50px] md:mb-[80px] gap-5 md:gap-10">
        <button className="text-[20px] md:text-[40px] bg-[#B9FF66] rounded">
          Team
        </button>
        <p className="text-[15px] sm:text-[18px]">
          Meet the skilled and experienced team behind our <br /> successful
          digital marketing strategies
        </p>
      </div>
      <section className="mb-[50px] md:mb-[120px]">
        <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-between gap-5">
          <div className="md:w-[387px] h-[350px] p-[35px] border-1 border-b-5 rounded-[45px] flex flex-col gap-5">
            <div className="grid grid-cols-3 items-end m-auto gap-2">
              <img className="row-span-2" src={john} alt="" />
              <img
                className="col-end-5 h-[34px] w-[34px]"
                src={linked}
                alt=""
              />
              <div className="col-span-2 justify-end pl-3">
                <h3 className="text-[17px] md:text-[20px] text-bold">
                  John Smith
                </h3>
                <h5 className="text-[15px] md:text-[18px] text-light">
                  CEO and Founder
                </h5>
              </div>
            </div>
            <hr />
            <p className="text-[15px] md:text-[18px]">
              10+ years of experience in digital marketing. Expertise in SEO,
              PPC, and content strategy
            </p>
          </div>
          <div className="md:w-[387px] h-[350px] p-[35px] border-1 border-b-5 rounded-[45px] flex flex-col gap-5">
            <div className="grid grid-cols-3 items-end m-auto gap-2">
              <img className="row-span-2" src={jane} alt="" />
              <img
                className="col-end-5 h-[34px] w-[34px]"
                src={linked}
                alt=""
              />
              <div className="col-span-2 justify-end pl-3">
                <h3 className="text-[17px] md:text-[20px] text-bold">
                  Jane Doe
                </h3>
                <h5 className="text-[15px] md:text-[18px] text-light">
                  Director of Operations
                </h5>
              </div>
            </div>
            <hr />
            <p className="text-[15px] md:text-[18px]">
              7+ years of experience in project management and team leadership.
              Strong organizational and communication skills
            </p>
          </div>
          <div className="md:w-[387px] h-[350px] p-[35px] border-1 border-b-5 rounded-[45px] flex flex-col gap-5">
            <div className="grid grid-cols-3 items-end m-auto gap-2">
              <img className="row-span-2" src={micheal} alt="" />
              <img
                className="col-end-5 h-[34px] w-[34px]"
                src={linked}
                alt=""
              />
              <div className="col-span-2 justify-end pl-3">
                <h3 className="text-[17px] md:text-[20px] text-bold">
                  Michael Brown
                </h3>
                <h5 className="text-[15px] md:text-[18px] text-light">
                  Senior SEO Specialist
                </h5>
              </div>
            </div>
            <hr />
            <p className="text-[15px] md:text-[18px]">
              5+ years of experience in SEO and content creation. Proficient in
              keyword research and on-page optimization
            </p>
          </div>
          <div className="md:w-[387px] h-[350px] p-[35px] border-1 border-b-5 rounded-[45px] flex flex-col gap-5">
            <div className="grid grid-cols-3 items-end m-auto gap-2">
              <img className="row-span-2" src={emily} alt="" />
              <img
                className="col-end-5 h-[34px] w-[34px]"
                src={linked}
                alt=""
              />
              <div className="col-span-2 justify-end pl-3">
                <h3 className="text-[17px] md:text-[20px] text-bold">
                  Emily Johnson
                </h3>
                <h5 className="text-[15px] md:text-[18px] text-light">
                  PPC Manager
                </h5>
              </div>
            </div>
            <hr />
            <p className="text-[15px] md:text-[18px]">
              3+ years of experience in paid search advertising. Skilled in
              campaign management and performance analysis
            </p>
          </div>
          <div className="md:w-[387px] h-[350px] p-[35px] border-1 border-b-5 rounded-[45px] flex flex-col gap-5">
            <div className="grid grid-cols-3 items-end m-auto gap-2">
              <img className="row-span-2" src={brian} alt="" />
              <img
                className="col-end-5 h-[34px] w-[34px]"
                src={linked}
                alt=""
              />
              <div className="col-span-2 justify-end pl-3">
                <h3 className="text-[17px] md:text-[20px] text-bold">
                  Brian Williams
                </h3>
                <h5 className="text-[15px] md:text-[18px] text-light">
                  Social Media Specialist
                </h5>
              </div>
            </div>
            <hr />
            <p className="text-[15px] md:text-[18px]">
              4+ years of experience in social media marketing. Proficient in
              creating and scheduling content, analyzing metrics, and building
              engagement
            </p>
          </div>
          <div className="md:w-[387px] h-[350px] p-[35px] border-1 border-b-5 rounded-[45px] flex flex-col gap-5">
            <div className="grid grid-cols-3 items-end m-auto gap-2">
              <img className="row-span-2" src={sarah} alt="" />
              <img
                className="col-end-5 h-[34px] w-[34px]"
                src={linked}
                alt=""
              />
              <div className="col-span-2 justify-end pl-3">
                <h3 className="text-[17px] md:text-[20px] text-bold">
                  Sarah Kim
                </h3>
                <h5 className="text-[15px] md:text-[18px] text-light">
                  Content Creator
                </h5>
              </div>
            </div>
            <hr />
            <p className="text-[15px] md:text-[18px]">
              2+ years of experience in writing and editing Skilled in creating
              compelling, SEO-optimized content for various industries
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
