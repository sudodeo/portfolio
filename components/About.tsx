import React from "react";
import AboutTab from "./AboutTab";
import SkillTab from "./SkillTab";
import StacksTab from "./StacksTab";

const About = () => {
  const [activeTab, setActiveTab] = React.useState("About");

  const animateIndicator = (tab: string) => {
    const indicator = document.querySelector(".indicator") as HTMLElement;
    const tabBtns = document.querySelectorAll("button[role='tab']");
    const activeTabBtn = document.querySelector(
      `button[role='tab'][tabindex='0']`
    ) as HTMLElement;

    indicator.style.left = `${activeTabBtn?.offsetLeft}px`;
    indicator.style.width = `${activeTabBtn?.offsetWidth}px`;

    tabBtns.forEach((tabBtn) => {
      tabBtn.addEventListener("click", (e) => {
        indicator.style.left = `${(e.target as HTMLElement).offsetLeft}px`;
        indicator.style.width = `${(e.target as HTMLElement).offsetWidth}px`;

        // if on phone view
        // if (window.innerWidth < 768)
        tabBtn.scrollIntoView({ behavior: "smooth" });
      });
    });
  };

  React.useEffect(() => {
    animateIndicator(activeTab);
  }, [activeTab]);

  return (
    <section className="second_bg universal_x universal_y">
      <h2 className="title pt-12 !mb-1 md:mb-10" id="about">
        About me
      </h2>

      <section className="tabs  text-base md:text-lg">
        <div className="flex items-center gap-1 border-b border-gray-500 relative">
          <div className="indicator absolute bg-white h-[2px] -bottom-[1px]"></div>
          <button
            role="tab"
            tabIndex={activeTab === "About" ? 0 : -1}
            onClick={() => {
              setActiveTab("About");
            }}
            className={`${activeTab === "About" && "active"} w-full pb-5 pt-10`}
          >
            About
          </button>
          <button
            onClick={() => {
              setActiveTab("Skill");
            }}
            tabIndex={activeTab === "Skill" ? 0 : -1}
            role="tab"
            className={`${activeTab === "Skill" && "active"} w-full pb-5 pt-10`}
          >
            Skills & Services
          </button>
          <button
            onClick={() => {
              setActiveTab("Stacks");
            }}
            tabIndex={activeTab === "Stacks" ? 0 : -1}
            role="tab"
            className={`${
              activeTab === "Stacks" && "active"
            } w-full pb-5 pt-10`}
          >
            Stacks
          </button>
        </div>
      </section>

      <section className="relative  min-h-[500px]">
        {activeTab === "About" && <AboutTab />}
        {activeTab === "Skill" && <SkillTab />}
        {activeTab === "Stacks" && <StacksTab />}
      </section>
    </section>
  );
};

export default About;
