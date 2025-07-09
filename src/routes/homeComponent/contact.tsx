import contactUs from "../assets/home/contactUs.png";

export default function Contactus() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center mt-[60px] md:mt-[140px] mb-[50px] md:mb-[80px] gap-5 md:gap-10">
        <button className="text-[20px] md:text-[40px] bg-[#B9FF66] rounded">
          Contact
        </button>
        <p className="text-[15px] sm:text-[18px]">
          Connect with Us: Let's Discuss Your <br /> Digital Marketing Needs
        </p>
      </div>
      <section>
        <div className="overflow-hidden rounded-[45px] mb-[120px] flex items-center justify-center lg:justify-start h-[420px] md:h-[500px] lg:h-[773px] bg-[#F3F3F3] lg:pl-[50px] xl:pl-[100px] py-[100px] relative">
          <form action="">
            <div className="flex">
              <div className="flex">
                <button></button>
                <p>Say Hi</p>
              </div>
              <div className="flex">
                <button></button>
                <p>Get a Quote</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="">Name:</label>
              <input
                className="border-1 rounded-[14px] h-[45px] md:h-[59px] w-[260px] sm:w-[300px] md:w-[540px]"
                type="text"
              />
              <label htmlFor="">Email:</label>
              <input
                className="border-1 rounded-[14px] h-[45px] md:h-[59px] sm:w-[300px] md:w-[540px]"
                type="text"
              />
              <label htmlFor="">Message:</label>
              <textarea
                className="border-1 rounded-[14px] max-h-[45px] min-h-[30px] md:max-h-[59px] sm:w-[300px] md:w-[540px]"
                name=""
                id=""
              ></textarea>
              <button className="text-[20px] text-white md:text-[30px] bg-[#191A23] p-3 rounded-[14px] mt-5 md:p-2">
                Sent Message
              </button>
            </div>
          </form>
          <img
            className="hidden lg:block lg:h-[648px] absolute -right-82 "
            src={contactUs}
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
