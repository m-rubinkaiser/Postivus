import arrow from "../assets/home/arrow.png";

export default function Studies() {
  return (
    <section className="mb-[40px] md:mb-[130px]">
        <div className="flex flex-col md:flex-row items-center mt-[30px] md:mt-[140px] mb-[50px] md:mb-[80px] gap-5 md:gap-10">
          <button className="text-[20px] md:text-[40px] bg-[#B9FF66] rounded ">
            Case Studies
          </button>
          <p className="text-[15px] sm:text-[18px]">
            Explore Real-Life Examples of Our Proven Digital Marketing <br />{" "}
            Success through Our Case Studies
          </p>
        </div>
        <div className="h-[300px] flex xl:bg-[#191A23] rounded-[45px] overflow-x-scroll no-scrollbar overflow-y-hidden gap-5 items-center  text-white xl:justify-center xl:gap-10">
          <div className="h-[183px] bg-[#191A23] p-5 xl:p-0 rounded-2xl">
            <p className="w-[286px] text-[15px] xl:text-[18px]">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <div className="flex items-center gap-2">
              <p className="text-[20px]">Learn More</p>
              <img className="w-[41px] h-[41px]" src={arrow} alt="" />
            </div>
          </div>
          <hr className="h-45 border-1" />
          <div className="h-[183px] bg-[#191A23] p-5 xl:p-0 rounded-2xl">
            <p className="w-[286px] text-[15px] xl:text-[18px]">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <div className="flex items-center gap-2">
              <p className="text-[20px]">Learn More</p>
              <img className="w-[30px] h-[30px]" src={arrow} alt="" />
            </div>
          </div>
          <hr className="h-45 border-1" />
          <div className="h-[186px] bg-[#191A23] p-5 xl:p-0 rounded-2xl">
            <p className="w-[286px] text-[15px] xl:text-[18px]">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <div className="flex items-center gap-2">
              <p className="text-[20px]">Learn More</p>
              <img className="w-[30px] h-[30px]" src={arrow} alt="" />
            </div>
          </div>
        </div>
      </section>
  )
}
