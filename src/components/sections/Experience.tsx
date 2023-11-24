import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => (
  <span className="rounded-xl bg-yellow px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">
    {text}
  </span>
);

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-yellow px-3 py-10 pb-20 dark:bg-[#494949] md:px-0">
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest text-white">
        {t("experience.title")}
      </h2>

      <VerticalTimeline>
        {t("experience.experiences", { returnObjects: true }).map((exp) => (
          <VerticalTimelineElement
            key={exp.title}
            date={exp.years}
            dateClassName="dark:text-white"
            iconClassName="bg-[#AE944F] text-white dark:bg-[#919191]"
            icon={<Icon icon={exp.mainTechIcon} />}
            className="dark:brightness-80 dark:filter"

            // contentStyle={{ filter: "brightness(80%)" }}
          >
            <Badge text={exp.mainTech} />

            <h3 className="text-lg font-bold">{exp.title}</h3>
            <h4 className="text-md font-bold">{exp.company}</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <Badge key={tech} text={tech} />
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconClassName="bg-[#AE944F] text-white dark:bg-[#919191]"
          icon={<Icon icon="eos-icons:hourglass" />}
        />
      </VerticalTimeline>
      <h1  className="text-3xl mx-auto font-medium text-center mb-10">Estudios - Certificados</h1>
      <div className="flex flex-row ml-20">
        <img src="https://images.credly.com/images/b8e6d134-79fe-4f11-a50c-309463334760/blob.png" alt=""  className="w-[100px] h-[100px] "/>
        <div className="flex flex-col ml-5">
        <p className=" mt-4 font-bold text-lg ">Ingeniero en Desarrollo de Software</p>
        <p className="ml-5 font-medium tracking-[1px] text-md">2022 - Actualidad</p>
        </div>

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Cisco_academy_logo.svg/1200px-Cisco_academy_logo.svg.png" alt=""  className="w-[100px] h-[100px] ml-5"/>
        <div className="flex flex-col ml-5">
        <p className=" mt-4 font-bold text-lg ">Certificado en Network</p>
        <p className="ml-5 font-medium tracking-[1px] text-md">2022 - 2023</p>
        </div>

        <div className="mr-10 flex flex-row">
        <img src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png" alt=""  className="w-[100px] h-[100px] ml-5"/>
        <div className="flex flex-col ml-5">
        <p className=" mt-4 font-bold text-lg ">Certificado en manejo mySQL</p>
        <p className="ml-5 font-medium tracking-[1px] text-md">2021 - 2023</p>
        </div>
        </div>

        

      </div>
      <h1  className="text-3xl mx-auto font-medium text-center mb-10 mt-10">Referencias</h1>
        <div className="flex justify-center">
          <div>
        <p className="  font-bold text-lg ">Profesor universitario - Abraham Sosa Correa</p>
        <p className="  font-bold text-md text-center mb-2 ">Tecmilenio</p>

        <p className="ml-5 font-medium tracking-[1px] text-md">Correo: abrahamsosa@tecindustry.com</p>

        </div>
        </div>
        <div className="flex justify-center mt-5">
          <div>
        <p className="  font-bold text-lg text-center">Ex jefe - Ramon Sanchez Rodriguez</p>
        <p className="  font-bold text-md text-center mb-2 ">TecBooks</p>

        <p className="ml-5 font-medium tracking-[1px] text-md">Correo: RamonSCR@BooksForAll.com</p>

        </div>
        </div>
        <div className="flex justify-center mt-5">
          <div>
        <p className="  font-bold text-lg text-center ">Cliente - Jose ortega</p>
        <p className="  font-bold text-md text-center mb-2 ">DucKzz</p>

        <p className="ml-5 font-medium tracking-[1px] text-md">Correo: JoseORtega@DduckZz.com</p>

        </div>
        </div>
    </section>
  );
};

export default Experience;
