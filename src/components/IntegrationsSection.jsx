import React from "react";
import { ArrowRight } from "lucide-react";

const IntegrationsSection = () => {
  return (
    <section className="bg-white pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-tight">
          Less paperwork,
          <br />
          more{" "}
          <span className="relative inline-block">
            <span
              className="absolute block rounded-lg"
              style={{
                left: "52%",
                top: "45%",
                transform: "translate(-50%, -36%)",
                zIndex: 1,
                width: "103%",
                height: "33.6px",
                background:
                  "var(--token-50f7c55d-562d-4beb-9e4e-86ed7b4f818d, rgb(224, 255, 130))",
                WebkitMaskImage: 'url("https://iili.io/F74vt9a.png")',
                maskImage: 'url("https://iili.io/F74vt9a.png")',
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
                maskSize: "100% 100%",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                pointerEvents: "none",
              }}
            ></span>
            <span className="relative z-10 text-gray-900">people work</span>
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We integrate seamlessly with the tools <br /> you already use. Work smarter
          with Remote.
        </p>

        <button className="inline-flex items-center space-x-2 text-gray-900 border p-3 rounded-xl font-medium hover:underline mb-12 sm:mb-16">
          <span>See all integrations</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default IntegrationsSection;
