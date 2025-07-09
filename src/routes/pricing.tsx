import { createFileRoute } from "@tanstack/react-router";
import tick from "./assets/home/tick.png";

export const Route = createFileRoute("/pricing")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="my-10">
        <h1 className="text-[30px] font-bold">Pricing</h1>
        <p className="text-[18px]">
          Elevent Your Online Presence: Competitive Pricing <br /> for
          Exceptional Results
        </p>
      </div>
      <div className="flex flex-wrap gap-10 lg:gap-1 xl:gap-30 justify-center mb-10">
        <div className="flex flex-col p-5 w-[300px] border-1 border-b-5 rounded-[25px]">
        <div>
          <h1 className="text-[25px] font-bold">Basic Plan</h1>
          <p className="text-[30px] flex items-center gap-2 font-black">
            $500 <span className="text-[15px] font-medium">/month</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 ">
          <button className="bg-[#191A23] border-[#191A23] border-2 text-white p-2 rounded-[14px]">
            Get Started
          </button>
          <button className="border-[#191A23] border-2 text-[#191A23] p-2 rounded-[14px]">
            Request a quote
          </button>
        </div>
        <hr className="my-3" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center text-[18px]">
            <img className="h-[25px]" src={tick} alt="" />
            <p>Website Optimization</p>
          </div>
          <div className="flex items-center text-[18px]">
            <img className="h-[25px]" src={tick} alt="" />
            <p>Socila media setup and management [1 platform]</p>
          </div>
          <div className="flex items-center text-[18px]">
            <img className="h-[25px]" src={tick} alt="" />
            <p>Monthly Pogress report</p>
          </div>
          <div className="flex items-center text-[18px]">
            <img className="h-[25px]" src={tick} alt="" />
            <p>Email support</p>
          </div>
          <div className="flex items-center text-[18px]">
            <img className="h-[25px]" src={tick} alt="" />
            <p>Basic competitor analysis</p>
          </div>
          <div className="flex items-center text-[18px]">
            <img className="h-[25px]" src={tick} alt="" />
            <p>intial SEO audit</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap p-5 w-[300px] bg-[#191A23] text-gray-200 border-1 border-b-5 rounded-[25px]">
        <div>
          <h1 className="text-[25px] font-bold">Basic Plan</h1>
          <p className="text-[30px] flex items-center gap-2 font-black">
            $500 <span className="text-[15px] font-medium">/month</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 ">
          <button className="bg-[#B9FF66] border-2 border-[#B9FF66] text-[#191A23] p-2 rounded-[14px]">
            Get Started
          </button>
          <button className="border-white border-2 text-white p-2 rounded-[14px]">
            Request a quote
          </button>
        </div>
        <hr className="my-3" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center text-[18px]">
            <img className="h-[25px]" src={tick} alt="" />
            <p>Website Optimization</p>
          </div>
          <div className="flex items-center text-[18px]">
            <img className="h-[25px]" src={tick} alt="" />
            <p>Socila media setup and management [1 platform]</p>
          </div>
          <div className="flex items-center text-[18px]">
            <img className="h-[25px]" src={tick} alt="" />
            <p>Monthly Pogress report</p>
          </div>
          <div className="flex items-center text-[18px]">
            <img className="h-[25px]" src={tick} alt="" />
            <p>Email support</p>
          </div>
          <div className="flex items-center text-[18px]">
            <img className="h-[25px]" src={tick} alt="" />
            <p>Basic competitor analysis</p>
          </div>
          <div className="flex items-center text-[18px]">
            <img className="h-[25px]" src={tick} alt="" />
            <p>intial SEO audit</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap p-5 w-[300px] border-1 border-b-5 rounded-[25px]">
        <div>
          <h1 className="text-[25px] font-bold">Basic Plan</h1>
          <p className="text-[30px] flex items-center gap-2 font-black">
            $500 <span className="text-[15px] font-medium">/month</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 ">
          <button className="bg-[#191A23] border-[#191A23] border-2 text-white p-2 rounded-[14px]">
            Get Started
          </button>
          <button className="border-[#191A23] border-2 text-[#191A23] p-2 rounded-[14px]">
            Request a quote
          </button>
        </div>
        <hr className="my-3" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center text-[18px]">
            <img className="h-[25px]" src={tick} alt="" />
            <p>Website Optimization</p>
          </div>
          <div className="flex items-center text-[18px]">
            <img className="h-[25px]" src={tick} alt="" />
            <p>Socila media setup and management [1 platform]</p>
          </div>
          <div className="flex items-center text-[18px]">
            <img className="h-[25px]" src={tick} alt="" />
            <p>Monthly Pogress report</p>
          </div>
          <div className="flex items-center text-[18px]">
            <img className="h-[25px]" src={tick} alt="" />
            <p>Email support</p>
          </div>
          <div className="flex items-center text-[18px]">
            <img className="h-[25px]" src={tick} alt="" />
            <p>Basic competitor analysis</p>
          </div>
          <div className="flex items-center text-[18px]">
            <img className="h-[25px]" src={tick} alt="" />
            <p>intial SEO audit</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
