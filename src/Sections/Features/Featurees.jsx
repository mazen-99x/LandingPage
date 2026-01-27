import React from "react";

const items = [
  {
    num: "01",
    text: "Spot Trends in Seconds: No more digging through numbers.",
  },
  {
    num: "02",
    text: "Get Everyone on the Same Page: Share easy-to-understand reports with your team.",
  },
  {
    num: "03",
    text: "Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.",
  },
  {
    num: "04",
    text: "Your Global Snapshot: Get a quick, clear overview of your entire operation.",
  },
];

const Featurees = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT – Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6">
            See the Big Picture
          </h2>

          <p className="text-gray-500 max-w-xl mb-10">
            Area turns your data into clear, vibrant visuals that show you
            exactly what's happening in each region.
          </p>

          <div className="space-y-6 border-t border-gray-200 pt-6">
            {items.map((item) => (
              <div
                key={item.num}
                className="flex gap-6 border-b border-gray-200 pb-6 last:border-b-0"
              >
                <span className="text-(--gray-color) text-sm font-medium">
                  {item.num}
                </span>
                <p className="text-black">{item.text}</p>
              </div>
            ))}
          </div>

          <button className="mt-10 cursor-pointer inline-flex items-center rounded-full bg-(--Lgreen-color) px-6 py-3 text-sm font-semibold text-black hover:bg-(--Mgreen-color) hover:text-white transition">
            Discover More
          </button>
        </div>

        {/* RIGHT – Image */}
        <div className="w-full">
          <img
            src="/assets/Photo row 2.png"
            alt="Analytics preview"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Featurees;
