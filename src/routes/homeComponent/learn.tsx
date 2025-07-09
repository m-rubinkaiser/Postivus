import contact from "../assets/home/contact.png";

export default function Learn() {
  return (
    <section className="mb-[70px] md:mb-[140px]">
      <div className="flex bg-[#F3F3F3] rounded-[45px] px-[60px] justify-center items-center min-h-[347px] gap-[45px]">
        <div className="flex flex-col gap-3">
          <h1 className="text-[25px] md:text-[30px]">
            Let’s make things happen
          </h1>
          <p className="text-[15px] md:text-[18px]">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="w-full mt-5 md:w-[288px] h-[68px] rounded-[14px] bg-[#191A23] text-white text-[16px] md:text-[20px]">
            Get your Free Proposal
          </button>
        </div>
        <div className="hidden md:block relative overflow-visible h-[347px] w-[494px]">
          <img
            className=" h-[395px] w-[359px] -translate-y-8"
            src={contact}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
