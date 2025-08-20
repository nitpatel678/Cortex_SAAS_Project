import React from "react";
import { PricingTable } from "@clerk/clerk-react";
function Plan() {
  return (
    <div className="max-w-2xl mx-auto z-20 my-30 mb-16">
      <div className="text-center">
        <h2 className="font-poppins text-purple-500 text-[42px] font-semibold">
          Choose Your Plan
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Start for free and scale as you grow.Find the perfect plan for your
          needs.
        </p>
      </div>

      <div className="mt-14 max-sm:mx-8">
        <PricingTable />
      </div>
    </div>
  );
}

export default Plan;
