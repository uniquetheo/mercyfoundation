import { services } from "@/data/dummy";
import Image from "next/image";
// import myCarousel from "./myCarousel";

const Services = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto px-4 sm:px-0 py-8">
        <h2 className="section-header mb-4">What we do</h2>
        <div className="grid md:grid-cols-2">
          <div className="carousel pr-8">
            <Image
              src="/images/children-with-bread.jpg"
              alt="carousel"
              width={1280}
              height={852}
              className="rounded-2xl overflow-hidden"
            />
          </div>
          <div className="text flex flex-col">
            <div className="head">
              <h3 className="text-2xl md:text-4xl font-bold mb-3 text-balance">
                Some Services We Provide for Beneficiaries
              </h3>
              <p>
                Mercy foundation provides the following services to children in
                our area of operation
              </p>
            </div>
            <div className="content flex flex-col gap-3 my-4">
              {services.map((service, index) => (
                <div key={index} className="flex gap-4">
                  <div className="icon text-3xl">{service.icon}</div>
                  <div className="text">
                    <h4 className="text-xl font-bold">{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
