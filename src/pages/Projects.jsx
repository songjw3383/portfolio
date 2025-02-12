import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  { title: "Project 1", description: "Description 1", image: "image1.jpg" },
  { title: "Project 2", description: "Description 2", image: "image2.jpg" },
  { title: "Project 3", description: "Description 3", image: "image3.jpg" },
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col items-center justify-center p-16">
      <div className="flex gap-4 mb-6">
        {projects.map((project, index) => (
          <button
            key={index}
            className={`p-2 rounded-md transition-colors ${
              index === currentIndex ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            {project.title}
          </button>
        ))}
      </div>
      <div className="relative flex items-center justify-center w-full h-full bg-gray-100 rounded-lg  p-8 m-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: currentIndex === 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: currentIndex > 0 ? -50 : 50 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-8 w-full h-full"
          >
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              className="w-1/3 h-full object-cover rounded-lg"
            />
            <div className="w-2/3 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">
                {projects[currentIndex].title}
              </h3>
              <p className="text-gray-700">
                {projects[currentIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={prevProject}
        disabled={currentIndex === 0}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl transition-opacity ${
          currentIndex === 0
            ? "opacity-20"
            : "animate-pulse opacity-100 text-blue-500"
        }`}
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextProject}
        disabled={currentIndex === projects.length - 1}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl transition-opacity ${
          currentIndex === projects.length - 1
            ? "opacity-20"
            : "animate-pulse opacity-100 text-blue-500"
        }`}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Projects;
