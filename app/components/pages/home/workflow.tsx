"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Identifying The Problem",
    description:
      "The first step in building your custom AI solutions begins with identifying the problems or opportunities that the system can solve. Our team runs a thorough analysis to examine the pain points of the project and create a business case.",
    image: "/wrkflow1.jpg",
  },
  {
    id: 2,
    title: "Preparing The Data",
    description:
      "Once the problem is identified, the next step is collecting, cleaning, and preparing the required data. High-quality data is essential for developing an accurate and reliable AI solution.",
    image: "/wrk4.jfif",
  },
  {
    id: 3,
    title: "The Suited AI Model",
    description:
      "Based on the project requirements and available data, the most suitable AI model is selected. Different approaches are evaluated to determine the best solution.",
    image: "/wrkflow1.jpg",
  },
  {
    id: 4,
    title: "Training The Model",
    description:
      "The selected model is trained using the prepared dataset. The model is continuously evaluated and improved to achieve the required level of accuracy.",
    image: "/wrk4.jfif",
  },
  {
    id: 5,
    title: "Testing The Model",
    description:
      "The trained model is tested using different scenarios to make sure it performs correctly and consistently.",
    image: "/wrkflow1.jpg",
  },
  {
    id: 6,
    title: "Deployment",
    description:
      "After successful testing, the AI solution is deployed into the required production environment.",
    image: "/wrk4.jfif",
  },
  {
    id: 7,
    title: "Monitoring & Optimization",
    description:
      "The final solution is continuously monitored and optimized to maintain performance and reliability.",
    image: "/wrkflow1.jpg",
  },
];

export default function Workflow() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % steps.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const step = steps[current];

  return (
    <section className="bg-[#182434] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="md:text-2xl text-xl font-semibold">
            Our AI Development Process
          </h2>

          <p className="mt-4 md:text-sm text-xs leading-6 text-gray-300">
            Developing an AI solution according to your needs involves a
            structured approach to assure its success and effectiveness.
          </p>

          <div className="mx-auto mt-5 h-[2px] w-16 bg-cyan-500" />
        </div>

        <div className="mt-8 flex items-center justify-end gap-3">
          <button
            onClick={prevSlide}
            className="flex h-8 w-8 items-center cursor-pointer justify-center rounded-full border border-white/70"
          >
            ←
          </button>

          <span className="text-sm">
            {current + 1}/{steps.length}
          </span>

          <button
            onClick={nextSlide}
            className="flex h-8 w-8 items-center cursor-pointer justify-center rounded-full border border-white/70"
          >
            →
          </button>
        </div>

  
        <div className="relative mt-4">

          <div className="absolute left-0 top-0 h-[2px] w-full bg-gray-500" />

       
          <motion.div
            className="absolute left-0 top-0 h-[2px] bg-white"
            animate={{
              width: `${((current + 1) / steps.length) * 100}%`,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          />

        
          <div className="relative grid grid-cols-4 gap-4 pt-4">
            {steps.slice(0, 4).map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrent(index)}
                className={`text-left md:text-sm text-xs transition ${
                  current === index
                    ? "text-white"
                    : "text-gray-300"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

      
        <div className="mt-10 grid items-center gap-6 md:grid-cols-2">

          
          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
              className="rounded-md bg-white p-7 text-[#182434]"
            >
              <span className="text-sm font-semibold">
                {String(step.id).padStart(2, "0")}
              </span>

              <h3 className="mt-4 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                {step.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={step.image}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="relative  overflow-hidden rounded-md"
            >
              <Image
                src={step.image}
                alt={step.title}
                height={300}
              
                width={500}
                className="object-cover md:mt-27 rounded"
              />
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}