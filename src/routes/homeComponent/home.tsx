import amazon from "../assets/home/amazon.png";
import dribble from "../assets/home/dribble.png";
import hubspot from "../assets/home/hubspot.png";
import netflix from "../assets/home/netflix.png";
import speaker from "../assets/home/speaker.png";
import zoom from "../assets/home/zoom.png";
import notion from "../assets/home/notion.png";

export default function Home() {
  return (
    <>
      <section>
        <div className="my-[30px] md:my-[70px] grid grid-cols-1 lg:grid-cols-2 gap-4">
          <h1 className="text-[35px] sm:text-[50px] xl:text-[60px] font-bold lg:w-[520px]">
            Navigating the digital landscape for success
          </h1>
          <div className="relative">
            <img
              className="md:row-span-2 lg:absolute right-0 lg-w-[515px] lg-h-[600px]"
              src={speaker}
              alt=""
            />
          </div>
          <div>
            <p className="text-[20px]font-normal lg-max-w-[457px]">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <button className="h-[68px] w-full lg:w-[264px] mt-5 bg-[#191A23] text-white rounded-[14px]">
              Book a consultation
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 xl:grid-cols-6 gap-4">
          <img src={amazon} alt="" />
          <img src={dribble} alt="" />
          <img src={hubspot} alt="" />
          <img src={notion} alt="" />
          <img src={netflix} alt="" />
          <img src={zoom} alt="" />
        </div>
      </section>
    </>
  );
}
