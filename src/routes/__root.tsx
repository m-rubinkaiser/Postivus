import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import logo from "./assets/logo.png";
import twit from "./assets/home/twit.png";
import face from "./assets/home/face.png";
import linkedin from "./assets/home/linkedin.png";
import postivus from "./assets/home/postivus.png";
import { useEffect, useRef, useState } from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent(){
  const [navVisible, setNavVisible]= useState(false)
  const navRef = useRef<HTMLDivElement>(null); 

  const navOpen = () => setNavVisible(true);
  const navClose = () => setNavVisible(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        navClose();
      }
    }

    if (navVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navVisible]);

  return(
    <div>
      <nav ref={navRef} className="font-light text-[18px] xl:text-[20px] container px-4 md:px-6 mt-[20px] md:mt-[60px] mx-auto flex justify-between items-center ">
        <Link to="/">
          <img
            className="w-[180px] h-[45px] xl:w-[219.54px] xl:h-[56px]"
            src={logo}
            alt=""
          />
        </Link>
        <i className={`lg:absolute lg:invisible ${navVisible?"hidden":"fa fa-bars"}`} onClick={navOpen}></i>
        <div className={`gap-[40px] items-center text-white lg:text-black lg:p-0 lg:static lg:flex lg:flex-row z-1 lg:bg-white ${navVisible?"flex flex-col pt-[33px] px-[20px] bg-[#464646bd] fixed right-0 top-0 h-full":"hidden"}`}>
          <i className="fa fa-close text-right lg:absolute lg:invisible" onClick={navClose}></i>
          <Link to="/about" className="[&.active]:font-bold">
            About us
          </Link>{" "}
          <Link to="/services" className="[&.active]:font-bold">
            Services
          </Link>
          <Link to="/useCases" className="[&.active]:font-bold">
            Use Cases
          </Link>
          <Link to="/pricing" className="[&.active]:font-bold">
            Pricing
          </Link>
          <Link to="/blog" className="[&.active]:font-bold">
            Blog
          </Link>
          <button className="border-2 p-2 rounded-[14px]">Request a quote</button>
        </div>
      </nav>
      <Outlet />
      <footer className="md:container md:px-6 mx-auto text-white ">
        <div className="bg-[#191A23] md:rounded-t-[45px] p-[20px] md:p-[30px] lg:p-[60px]">
          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-0 justify-between">
            <Link to="/">
              <img
                className="w-[180px] h-[45px] xl:w-[219.54px] xl:h-[56px]"
                src={postivus}
                alt=""
              />
            </Link>
            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-2 lg:gap-10 text-[18px] xl:text-[20px] ">
              <Link to="/" className="[&.active]:font-bold">
                About us
              </Link>{" "}
              <Link to="/about" className="[&.active]:font-bold">
                Services
              </Link>
              <Link to="/about" className="[&.active]:font-bold">
                UseCases
              </Link>
              <Link to="/about" className="[&.active]:font-bold">
                Pricing
              </Link>
              <Link to="/about" className="[&.active]:font-bold">
                Blog
              </Link>
            </div>
            <div className=" flex gap-[10px] md:gap-[5px] lg:gap-[10px]">
              <a href="">
                <img className="h-[30px] w-[30px]" src={linkedin} alt="" />
              </a>
              <a className="h-[30px] w-[30px]" href="">
                <img src={face} alt="" />
              </a>
              <a className="h-[30px] w-[30px]" href="">
                <img src={twit} alt="" />
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between mt-5 gap-5">
            <div className="flex flex-col md:items-start  text-center md:text-start gap-2">
              <button>Contact Us:</button>
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-5">
              <input
                className="w-[285px] h-[67px] p-[22px] rounded-[14px] border-white border-1"
                type="text"
                placeholder="Email"
              />
              <button className="w-[285px] h-[67px] p-[22px] bg-[#B9FF66] text-black rounded-[14px]">
                Subscribe to News
              </button>
            </div>
          </div>
          <hr className="my-5" />
          <div className="flex flex-col md:flex-row items-center gpa-3 md:gap-5 justify-start">
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </footer>
      {/* <TanStackRouterDevtools /> */}
    </div>
  )
}
