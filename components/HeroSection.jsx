import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto px-4 sm:px-0 py-8 grid grid-cols-1 md:grid-cols-2  items-center">
        <div className="flex flex-col gap-6 text-custom-black md:pr-2">
          <h1 className="text-3xl sm:text-4xl text-balance font-bold">
            Transform Lives with Your Generosity
          </h1>
          <p className="">
            Your support makes a lasting impact on children and families in
            need. With every donation, you&apos;re providing access to
            education, healthcare, and skills training—empowering individuals to
            build brighter futures.
          </p>
          <p className="">Join us in creating meaningful change today.</p>
          <div className="pb-6">
            <button className="btn btn-primary">Join the Cause</button>
          </div>
        </div>
        <div className="image rounded-xl overflow-hidden">
          <Image
            src="/images/children-with-bread.jpg"
            alt="Children with bread"
            className="w-full h-full object-cover"
            width={1280}
            height={852}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
