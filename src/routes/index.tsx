import { createFileRoute } from "@tanstack/react-router";
import "./App.css";
// import border from "./assets/home/border.png";
import Home from "./homeComponent/home";
import Services from "./homeComponent/services";
import Learn from "./homeComponent/learn";
import Studies from "./homeComponent/studies";
import Achievement from "./homeComponent/achievement";
import Team from "./homeComponent/team";
// import Testimonials from "./homeComponent/testimonials";
import Contactus from "./homeComponent/contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <Home />
      <Services />
      <Learn />
      <Studies />
      <Achievement />
      <Team />
      {/* <Testimonials /> */}
      <Contactus />
    </div>
  );
}