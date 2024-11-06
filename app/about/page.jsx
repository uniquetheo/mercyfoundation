import BannerCTASection from "@/components/BannerCTA";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  activities,
  getInvolved,
  meetOurTeam,
  mission,
  ourImpact,
  ourStory,
  ourValues,
  values,
  vision,
  whatWeDo,
} from "@/data/dummy";
import React from "react";

const AboutPage = () => {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] ">
      <div className="page-header w-full  bg-light-1">
        <h2 className="text-center text-3xl text-balance font-extrabold py-8">
          About Us
        </h2>
      </div>
      <div className="container mx-auto px-4 sm:px-0 py-8 bg-white">
        <div className="content">
          <div className="intro">
            <span>Making a Difference in the Lives of Those in Need</span>
            <p>
              &quot;At Mercy Foundation, we are driven by a mission to uplift
              underprivileged communities through access to quality education,
              healthcare, and skills training. Our ultimate goal is to empower
              individuals and foster sustainable change while sharing the love
              of Christ.&quot;
            </p>
          </div>
          <div className="mission-vision">
            <Section
              title={mission[0].title}
              description={mission[0].description}
            />
            <Section
              title={vision[0].title}
              description={vision[0].description}
            />
          </div>
          <Section
            title={ourStory[0].title}
            description={ourStory[0].description}
          />

          {/* <div className="our-values">
            <SectionTitle>Our Values</SectionTitle>
            {values.map((value, index) => (
              <div key={index}>
                <h3>{value.title}</h3>
                <span>{value.description}</span>
              </div>
            ))}
          </div> */}
          {/* <section className="what-we-do">
            <h2>What We Do</h2>
            <p>
              Mercy Foundation operates in several areas aimed at creating a
              holistic impact on the lives of vulnerable populations.
              Here&quot;s a closer look at our primary initiatives:
            </p>
            <div>
              {activities.map((item, index) => (
                <div key={index}>
                  <h3>{item.title}</h3>
                  <span>{item.description}</span>
                </div>
              ))}
            </div>
          </section> */}
          <Section
            title={ourValues[0].title}
            cardSource={ourValues[1].values}
          />
          <Section
            title={whatWeDo[0].title}
            description={whatWeDo[0].description}
            cardSource={whatWeDo[1].activities}
          />
          <Section
            title={ourImpact[0].title}
            description={ourImpact[0].description}
          />

          <Section
            title={meetOurTeam[0].title}
            description={meetOurTeam[0].description}
          />
          <Section
            title={getInvolved.title}
            description={getInvolved.description}
          />

          <BannerCTASection />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
