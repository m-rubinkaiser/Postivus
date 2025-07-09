import { useState } from "react";
import plus from "../assets/home/plus.png";
import minus from "../assets/home/minus.png";

const steps = [
  {
    id: 1,
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 2,
    title: "Research and Strategy Development",
    content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 3,
    title: "Implementation",
    content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 4,
    title: "Monitoring and Optimization",
    content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 5,
    title: "Reporting and Communication",
    content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 6,
    title: "Continual Improvement",
    content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
];

export default function Achievement() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const toggle = (id: number) => {
    setActiveIndex((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center mt-[30px] md:mt-[140px] mb-[50px] md:mb-[80px] gap-5 md:gap-10">
        {" "}
        <button className="text-[20px] md:text-[40px] bg-[#B9FF66] rounded ">
          {" "}
          Our Working Process{" "}
        </button>{" "}
        <p className="text-[15px] sm:text-[18px]">
          {" "}
          Step-by-Step Guide to Achieving <br /> Your Business Goals{" "}
        </p>{" "}
      </div>

      <section className="flex flex-col gap-10">
        {steps.map((step) => (
          <div
            key={step.id}
            id={String(step.id)}
            className={`${
              step.id === activeIndex ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
            } rounded-[20px] border-1 border-b-5 px-[15px] md:px-[60px]`}
          >
            <div className="flex justify-between items-center md:py-[30px] py-[15px]">
              <div className="flex gap-5 items-center">
                <h1 className="text-[30px] md:text-[60px]">
                  {String(step.id).padStart(2, "0")}
                </h1>
                <h2 className="text-[20px] md:text-[30px]">{step.title}</h2>
              </div>
              <img
                className="h-[58px] w-[58px] cursor-pointer"
                src={activeIndex === step.id ? minus : plus}
                onClick={() => toggle(step.id)}
                alt=""
              />
            </div>

            {activeIndex === step.id && (
              <div>
                <hr />
                <p className="md:py-[30px] py-[15px]">{step.content}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
