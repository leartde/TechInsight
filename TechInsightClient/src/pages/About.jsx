import React from "react";

const About1 = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
  <div className="container mx-auto">
    <div className="flex flex-wrap items-center justify-between -mx-4">
      <div className="w-full px-4 lg:w-6/12">
        <div className="flex items-center -mx-3 sm:-mx-4">
          <div className="w-full px-3 sm:px-4 xl:w-1/2">
            <div className="py-3 sm:py-4">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full h-auto max-w-xs max-h-xs rounded-2xl"
              />
            </div>
            <div className="py-3 sm:py-4">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full h-auto max-w-xs max-h-xs rounded-2xl"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:px-4 xl:w-1/2">
            <div className="relative z-10 my-4">
              <img
                src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                alt=""
                className="w-full h-auto max-w-xs max-h-xs rounded-2xl"
              />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary text-[#3d96b9]">
                  About Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-black sm:text-[40px]/[48px]">
                More About TechInsight
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                TechInsight is your go-to destination for in-depth explorations of the latest tech trends, innovations, and insights. 
              Whether you're a tech enthusiast or a professional in the industry, our mission is to provide you with comprehensive and insightful content that goes beyond the surface. 
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                Dive into our thought-provoking articles, stay ahead of the curve with reviews of the latest gadgets, and join our community of tech enthusiasts. 
              TechInsight is not just a website; it's a place where curiosity meets expertise, and where the possibilities of technology are uncovered.
                </p>
                <a
                    href="/"
                    className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-[#009bd6] hover:bg-opacity-90 hover:scale-105 transition duration-300 ease-in-out"
                >
                    Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About1;
