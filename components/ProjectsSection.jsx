import { projects } from "@/data/dummy";
import React from "react";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="container mx-auto px-4 sm:px-0 py-8">
        <h2 className="section-header mb-4">Projects we have done</h2>
        <h3 className="text-2xl md:text-4xl font-bold my-4 max-w-[650px] text-balance">
          Some Projects we have embarked on for beneficiaries
        </h3>
        <div className="grid md:grid-cols-3 my-6 gap-6 text-white">
          {projects.slice(0, 3).map((project, index) => (
            <div key={index} className="rounded-lg overflow-hidden relative">
              <div
                className={`min-h-[250px] bg-[url("/images/children-with-bread.jpg")] bg-cover bg-center bg-no-repeat `}
              >
                <div className="absolute bg-black/60 top-0 left-0 right-0 bottom-0 z-0"></div>
                <div className="relative z-10 px-4 py-6 h-[250px] flex flex-col justify-between ">
                  <h3 className="text-xl font-bold text-balance">
                    {project.title}
                  </h3>
                  <p>{project.description}</p>
                  <div className="">
                    <button className="btn btn-primary">Learn more</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
