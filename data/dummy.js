import { CiHospital1 } from "react-icons/ci";
import { IoFastFoodOutline, IoBriefcaseOutline } from "react-icons/io5";
import { HiOutlineBriefcase } from "react-icons/hi2";

export const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Programs", path: "/programs" },
  { title: "Volunteer", path: "/volunteer" },
];

export const services = [
  {
    title: "Education",
    icon: <HiOutlineBriefcase />,
    description:
      "We provide educational support to children in our area of operation",
  },
  {
    title: "Health",
    icon: <CiHospital1 />,
    description:
      "We provide health support to children in our area of operation",
  },
  {
    title: "Nutrition",
    icon: <IoFastFoodOutline />,
    description:
      "We provide nutritional support to children in our area of operation",
  },
  {
    title: "Skill Training",
    icon: <IoBriefcaseOutline />,
    description:
      "We provide shelter support to children in our area of operation",
  },
];

export const projects = [
  {
    title: "Project 1",
    description: "This is the first project we embarked on",
    imageUrl: "/images/children-with-bread.jpg",
  },
  {
    title: "Project 2",
    description: "This is the second project we embarked on",
    imageUrl: "/images/children-with-bread.jpg",
  },
  {
    title: "Project 3",
    description: "This is the third project we embarked on",
    imageUrl: "/images/children-with-bread.jpg",
  },
  {
    title: "Project 4",
    description: "This is the fourth project we embarked on",
    imageUrl: "/images/children-with-bread.jpg",
  },
  {
    title: "Project 5",
    description: "This is the fourth project we embarked on",
    imageUrl: "/images/children-with-bread.jpg",
  },
  {
    title: "Project 6",
    description: "This is the fourth project we embarked on",
    imageUrl: "/images/children-with-bread.jpg",
  },
];
