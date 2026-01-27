import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const areaFeatures = [
  { text: "Ultra-fast browsing", icon: "check" },
  { text: "Advanced AI insights", icon: "check" },
  { text: "Seamless integration", icon: "check" },
  { text: "Advanced AI insights", icon: "check" },
  { text: "Ultra-fast browsing", icon: "check" },
  { text: "Full UTF-8 support", icon: "check" },
];

const webSurgeFeatures = [
  { text: "Fast browsing", icon: "check" },
  { text: "Basic AI recommendations", icon: "check" },
  { text: "Restricts customization", icon: "check" },
  { text: "Basic AI insights", icon: "x" },
  { text: "Fast browsing", icon: "check" },
  { text: "Potential display errors", icon: "x" },
];

const hyperViewFeatures = [
  { text: "Moderate speeds", icon: "x" },
  { text: "No AI assistance", icon: "x" },
  { text: "Steep learning curve", icon: "x" },
  { text: "No AI assistance", icon: "x" },
  { text: "Moderate speeds", icon: "x" },
  { text: "Partial UTF-8 support", icon: "x" },
];

const Specifications = () => {
  return (
    <div
      id="specifications"
      className="container pt-20  border-t border-(--divider-color)"
    >
      {/* Header */}
      <div className="content px-4 md:px-20 lg:px-60 text-center flex flex-col items-center">
        <p className="text-(--Dgreen-color)">spece</p>

        <h3 className="py-10 text-[50px] md:text-[54px] lg:text-[60px] tracking-[-0.03rem]">
          Why Choose Area?
        </h3>

        <p className="text-[15px] text-(--gray-color) tracking-[-0.005em] max-w-xl">
          You need a solution that keeps up. That’s why we developed Area. A
          developer-friendly approach to streamline your business.
        </p>

        <button className="mt-10 cursor-pointer inline-flex items-center rounded-full bg-(--Lgreen-color) px-6 py-3 text-sm font-semibold text-black hover:bg-(--Mgreen-color) hover:text-white transition">
          Discover More
        </button>
      </div>

      {/* TABLE — 100px SPACE */}
      <div className="mt-25">
        {/* Scrollable only on small screens */}
        <div className="md:overflow-visible overflow-x-auto scrollbar-hide">
          <div className="min-w-225 md:min-w-full grid grid-cols-3 gap-0 rounded-xl overflow-hidden border border-gray-300 shadow-sm text-sm md:text-base">
            {/* Area Column */}
            <div className="area text-center bg-white">
              <h4 className="font-semibold py-6 text-2xl md:text-3xl border-b border-gray-300">
                Area
              </h4>
              <ul>
                {areaFeatures.map(({ icon, text }, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center gap-2 p-6 md:p-8 border-b border-gray-200 last:border-b-0"
                  >
                    {icon === "check" ? (
                      <AiOutlineCheck className="text-green-600 text-lg md:text-xl" />
                    ) : (
                      <AiOutlineClose className="text-red-400 text-lg md:text-xl" />
                    )}
                    <span className="text-[14px] md:text-base">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WebSurge Column */}
            <div className="websurge text-center bg-gray-50 md:border-l border-gray-300">
              <h4 className="font-semibold py-6 text-2xl md:text-3xl border-b border-gray-300 text-gray-500">
                WebSurge
              </h4>
              <ul>
                {webSurgeFeatures.map(({ icon, text }, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center gap-2 p-6 md:p-8 border-b border-gray-200 last:border-b-0"
                  >
                    {icon === "check" ? (
                      <AiOutlineCheck className="text-green-600 text-lg md:text-xl" />
                    ) : (
                      <AiOutlineClose className="text-red-400 text-lg md:text-xl" />
                    )}
                    <span className="text-[14px] md:text-base">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* HyperView Column */}
            <div className="hyperview text-center bg-gray-50 md:border-l border-gray-300">
              <h4 className="font-semibold py-6 text-2xl md:text-3xl border-b border-gray-300 text-gray-500">
                HyperView
              </h4>
              <ul>
                {hyperViewFeatures.map(({ icon, text }, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center gap-2 p-6 md:p-8 border-b border-gray-200 last:border-b-0"
                  >
                    {icon === "check" ? (
                      <AiOutlineCheck className="text-green-600 text-lg md:text-xl" />
                    ) : (
                      <AiOutlineClose className="text-red-400 text-lg md:text-xl" />
                    )}
                    <span className="text-[14px] md:text-base">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
