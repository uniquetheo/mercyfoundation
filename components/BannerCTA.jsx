import React from "react";

const BannerCTASection = () => {
  return (
    <section className="min-h-[250px]">
      <div className="container mx-auto px-4 md:px-0 py-10">
        <div
          className={`min-h-[350px] bg-[url("/images/children-with-bread.jpg")] bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden relative`}
        >
          <div className="absolute bg-black/60 top-0 left-0 right-0 bottom-0 z-0"></div>
          <div className="relative z-10 px-4 py-8 h-[350px] flex flex-col justify-between items-center">
            <h3 className="text-3xl md:text-5xl font-bold text-white text-balance text-center">
              You can also contribute to make the world a better place
            </h3>
            <p className="text-white">
              We are committed to making the world a better place for children
              and the less privileged in our society. Join us today to make a
              difference.
            </p>
            <div className="flex gap-8">
              <button className="btn btn-primary">Join as a Volunteer</button>
              <button className="btn btn-secondary">Donate</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCTASection;
