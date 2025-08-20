import React from "react";

export default function Testimonial() {
  return (
    <div className="px-4 sm:px-20 xl:px-32 my-24 text-center">
      {/* Section Heading */}
      <h2 className="text-purple-500 text-3xl sm:text-4xl font-bold  font-poppins mb-4">
        Loved By Our Users
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto text-base mb-12">
        Cortex helps creators, entrepreneurs, and teams do more with less —
        from AI-powered content writing to effortless image generation and summaries.
      </p>

      {/* Testimonials */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Testimonial Card 1 */}
        <div className="w-80 flex flex-col items-center border border-gray-200 p-8 rounded-xl shadow-md bg-white">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Donald Jackman</h3>
          <p className="text-sm text-gray-500 mb-3">Graphic Designer</p>
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#a855f7"
                />
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-600 text-center">
            Cortex’s AI tools help me generate high-quality visuals and captions for my clients in minutes.
            It’s a game-changer for freelancers like me.
          </p>
        </div>

        {/* Testimonial Card 2 */}
        <div className="w-80 flex flex-col items-center border border-gray-200 p-8 rounded-xl shadow-md bg-white">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Richard Nelson</h3>
          <p className="text-sm text-gray-500 mb-3">Content Creator</p>
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#a855f7"
                />
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-600 text-center">
            I’ve streamlined my workflow using Cortex’s blog writer and summarizer. Publishing quality content has never been faster.
          </p>
        </div>

        {/* Testimonial Card 3 */}
        <div className="w-80 flex flex-col items-center border border-gray-200 p-8 rounded-xl shadow-md bg-white">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">James Washington</h3>
          <p className="text-sm text-gray-500 mb-3">Startup Co-founder</p>
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#a855f7"
                />
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-600 text-center">
            As a founder, time is money. Cortex helps my team generate images, summarize reports, and ideate blog content—all in one place.
          </p>
        </div>
      </div>
    </div>
  );
}
