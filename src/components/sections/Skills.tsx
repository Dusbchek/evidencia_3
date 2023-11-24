import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#1f1f1f] px-3 py-5 pb-20 md:px-0">
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest text-white">
        {t("skills.title")}
      </h2>

      <ul className="flex flex-wrap justify-center  gap-4">
        <li className="flex h-[100px] w-[100px] flex-row items-center justify-center rounded-[8px]  p-[5x] text-white">
          <div className="mr-8 flex flex-col">
            <img
              src="https://icon-icons.com/icons2/107/PNG/512/united_kingdom_flag_flags_18060.png"
              alt="flag"
            />
            <h1>Ingles</h1>
          </div>
          <div className="flex flex-col mr-8">
            <img
              src="https://cdn.icon-icons.com/icons2/3665/PNG/512/spain_flag_icon_228692.png"
              alt="flag2"
            />
            <h1>Español</h1>
          </div>
          <div className="flex flex-col mr-8">
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/java-14-logo-png-transparent.png"
              alt="Java"
            />
            <h1>Java</h1>
          </div>
          <div className="flex flex-col mr-8">
            <img
              src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png"
              alt="react"
            />
            <h1>React</h1>
          </div>
          <div className="flex flex-col mr-8">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-javascript-3630127-3031259.png"
              alt="JS"
            />
            <h1>mySQL</h1>
          </div>
          <div className="flex flex-col mr-8">
            <img
              src="https://assets.stickpng.com/images/62debc4fff3c6e4b8b5de8d3.png"
              alt="sql"
            />
            <h1>mySQL</h1>
          </div>

          
        </li>

      </ul>

    </section>
    
  );
};

export default Skills;
