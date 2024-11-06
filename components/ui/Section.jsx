import { IoFlashOffSharp } from "react-icons/io5";
import SectionTitle from "./SectionTitle";
import { Hospital } from "lucide";

const Section = ({ title, description, cardSource }) => {
  // console.log("source:::", cardSource);
  return (
    <section className="py-5">
      <SectionTitle>{title}</SectionTitle>
      <p>{description}</p>
      {cardSource && (
        <div className="card-container py-6">
          {cardSource.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 text-center shadow rounded-2xl w-full min-w-[150px]"
            >
              <h4 className="text-balance text-xl font-bold">{item.title}</h4>
              <div className="w-full flex items-center justify-center py-5">
                <IoFlashOffSharp />
              </div>
              <span>{item.description}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Section;
