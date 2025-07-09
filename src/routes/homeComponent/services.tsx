import arrow from "../assets/home/arrow.png";
import searchEngine from "../assets/home/searchEngine.png";
import pay from "../assets/home/pay.png";
import social from "../assets/home/social.png";
import mail from "../assets/home/mail.png";
import content from "../assets/home/content.png";
import tracking from "../assets/home/tracking.png";

export default function Services() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center mt-[30px] md:mt-[140px] mb-[50px] md:mb-[80px] gap-5 md:gap-10">
        <button className=" text-[20px] md:text-[40px] bg-[#B9FF66] rounded ">
          Services
        </button>
        <p className="md:w-[580px] text-[15px] sm:text-[18px]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <section className="flex flex-col gap-[40px] mb-[50px] md:mb-[100px]">
        <div className="flex flex-col xl:flex-row gap-[40px] items-center">
          <div className="grid grid-cols-2 p-[50px] border-b-5 bg-[#F3F3F3] rounded-[45px] md:gap-[69px]">
            <div className="col-span-2 md:col-span-1 text-[25px] sm:text-[30px] mb-[24px] w-[230px]">
              <h1 className="bg-[#B9FF66] rounded-[7px] inline-block px-2">
                Search engine{" "}
              </h1>
              <br />
              <h1 className="bg-[#B9FF66] rounded-[7px] inline-block px-2">
                optimization
              </h1>
            </div>
            <img
              className="my-auto order-3 md:order-2 md:row-span-2 h-[170px] w-[210px]"
              src={searchEngine}
              alt=""
            />
            <div className="order-2 md:order-3 flex gap-[6.5px] items-end">
              <img className="w-[41px] h-[41px]" src={arrow} alt="" />
              <p className="hidden sm:block sm:text-[20px]">Learn more</p>
            </div>
          </div>
          <div className="grid grid-cols-2 p-[50px] border-b-5 bg-[#B9FF66] rounded-[45px] md:gap-[69px]">
            <div className="col-span-2 md:col-span-1 text-[25px] sm:text-[30px] mb-[24px] w-[230px]">
              <h1 className="bg-[#ffffff] rounded-[7px] inline-block px-2">
                Pay-per-click
              </h1>
              <br />
              <h1 className="bg-[#ffffff] rounded-[7px] inline-block px-2">
                advertising
              </h1>
            </div>
            <img
              className="my-auto order-3 md:order-2 md:row-span-2 h-[170px] w-[210px]"
              src={pay}
              alt=""
            />
            <div className="order-2 md:order-3 flex gap-[6.5px] items-end">
              <img className="w-[41px] h-[41px]" src={arrow} alt="" />
              <p className="hidden sm:block sm:text-[20px]">Learn more</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-[40px] items-center">
          <div className="grid grid-cols-2 p-[50px] border-b-5 bg-[#F3F3F3] rounded-[45px] md:gap-[69px]">
            <div className="col-span-2 md:col-span-1 text-[25px] sm:text-[30px] mb-[24px] ">
              <h1 className="bg-[#ffffff] rounded-[7px] inline-block px-2">
                Search engine{" "}
              </h1>
              <br />
              <h1 className="bg-[#ffffff] rounded-[7px] inline-block px-2">
                optimization
              </h1>
            </div>
            <img
              className="my-auto order-3 md:order-2 md:row-span-2 h-[170px] w-[230px]"
              src={mail}
              alt=""
            />
            <div className="order-2 md:order-3 flex gap-[6.5px] items-end">
              <img className="w-[41px] h-[41px]" src={arrow} alt="" />
              <p className="hidden sm:block sm:text-[20px]">Learn more</p>
            </div>
          </div>
          <div className="grid grid-cols-2 p-[50px] border-b-5 bg-[#191A23] rounded-[45px] md:gap-[69px]">
            <div className="col-span-2 md:col-span-1 text-[25px] sm:text-[30px] mb-[24px] w-[230px]">
              <h1 className="bg-[#B9FF66] rounded-[7px] inline-block px-2">
                Search engine{" "}
              </h1>
              <br />
              <h1 className="bg-[#B9FF66] rounded-[7px] inline-block px-2">
                optimization
              </h1>
            </div>
            <img
              className="my-auto order-3 md:order-2 md:row-span-2 h-[170px] w-[210px]"
              src={social}
              alt=""
            />
            <div className="order-2 md:order-3 flex gap-[6.5px] items-end">
              <img className="w-[41px] h-[41px]" src={arrow} alt="" />
              <p className="hidden sm:block sm:text-[20px]">Learn more</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-[40px] items-center">
          <div className="grid grid-cols-2 p-[50px] border-b-5 bg-[#B9FF66] rounded-[45px] md:gap-[69px]">
            <div className="col-span-2 md:col-span-1 text-[25px] sm:text-[30px] mb-[24px] w-[230px]">
              <h1 className="bg-[#ffffff] rounded-[7px] inline-block px-2">
                Search engine{" "}
              </h1>
              <br />
              <h1 className="bg-[#ffffff] rounded-[7px] inline-block px-2">
                optimization
              </h1>
            </div>
            <img
              className="my-auto order-3 md:order-2 md:row-span-2 h-[170px] w-[210px]"
              src={content}
              alt=""
            />
            <div className="order-2 md:order-3 flex gap-[6.5px] items-end">
              <img className="w-[41px] h-[41px]" src={arrow} alt="" />
              <p className="hidden sm:block sm:text-[20px]">Learn more</p>
            </div>
          </div>
          <div className="grid grid-cols-2 p-[50px] border-b-5 bg-[#191A23] rounded-[45px] md:gap-[69px]">
            <div className="col-span-2 md:col-span-1 text-[25px] sm:text-[30px] mb-[24px] w-[230px]">
              <h1 className="bg-[#B9FF66] rounded-[7px] inline-block px-2">
                Search engine{" "}
              </h1>
              <br />
              <h1 className="bg-[#B9FF66] rounded-[7px] inline-block px-2">
                optimization
              </h1>
            </div>
            <img
              className="my-auto order-3 md:order-2 md:row-span-2 h-[170px] w-[210px]"
              src={tracking}
              alt=""
            />
            <div className="order-2 md:order-3 flex gap-[6.5px] items-end">
              <img className="w-[41px] h-[41px]" src={arrow} alt="" />
              <p className="hidden sm:block sm:text-[20px]">Learn more</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
