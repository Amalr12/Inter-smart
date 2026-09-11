"use client";

import { Poppins } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const services = [
  {
    title: "Hyperparameter model tuning",
    description:
      "Our AI experts handle your hyperparameter tuning, optimizing your unique machine-learning model optimization requirements. We identify the hyperparameters relevant to your algorithm and tune the values to yield the best performance of the machine learning model.",
  },
  {
    title: "AI Consultation",
    description:
      "We help your teams reduce repetitive operations by designing practical AI workflow automation that improves process speed, accuracy, and business outcomes.",
  },
    {
    title: "NLP Solutions",
    description:
      "We help your teams reduce repetitive operations by designing practical AI workflow automation that improves process speed, accuracy, and business outcomes.",
  },
    {
    title: "Custom AI Model Development",
    description:
      "We help your teams reduce repetitive operations by designing practical AI workflow automation that improves process speed, accuracy, and business outcomes.",
  },
];

export default function AboutServices() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="space-y-5">
      {services.map((service, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={service.title}
            className="bg-[#F6F6F6] md:p-5 font-medium md:text-[22px] text-[16px] md:m-5"
          >
            <div className="flex items-center justify-between gap-4 p-5">
              <h1 className={`${poppins.className}`}>{service.title}</h1>

              <button
                type="button"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close service details" : "Open service details"}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex items-center justify-center text-[30px] text-[#182434] transition hover:text-blue-600"
              >
                {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </button>
            </div>

            {isOpen && (
              <p className={`px-5 text-[12px] md:text-[15px] font-normal space-y-2 text-justify flex ${poppins.className}`}>
                {service.description}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}