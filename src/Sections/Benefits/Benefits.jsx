import { MdCable, MdOutlineShowChart } from "react-icons/md";
import { FaEarthAfrica } from "react-icons/fa6";
import { RiAccountBoxFill } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
const BenefitsData = [
  {
    icon: MdCable,
    head: "Amplify Insights",
    para: "Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.",
  },
  {
    icon: FaEarthAfrica,
    head: "Control Your Global Presence",
    para: "Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.",
  },
  {
    icon: RiAccountBoxFill,
    head: "Remove Language Barriers",
    para: "Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.",
  },
  {
    icon: MdOutlineShowChart,
    head: "Visualize Growth",
    para: "Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.",
  },
];
const Benefits = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 650px)",
  });
  return (
    <div id="benefits" className="container pt-20 ">
      <p className="text-(--Dgreen-color) ">Benefits</p>
      <h3 className="text-6xl tracking-[-0.03em] py-12">
        We’ve cracked the code.
      </h3>
      <p className="text-(--gray-color) text-[15px] mb-12">
        Area provides real insights, without the data overload
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {BenefitsData.map(({ icon, head, para }, index) => {
          const Icon = icon;
          return (
            <div
              key={index}
              className="mr-5 pt-10  flex flex-col gap-4 border-t border-(--divider-color)"
            >
              <Icon size={24} style={{ marginBottom: "24px" }} />

              <div className="mr-5">
                <h3 className="text-[18px] mb-5 tracking-[-0.03em]">{head}</h3>

                <p className="text-(--gray-color) tracking-[-0.005em] text-[15px] max-md:mb-10">
                  {para}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-25 flex w-full justify-center">
        {isMobile ? (
          <img
            src="./assets/mb-Image 1.png"
            alt="benefits img"
            className="object-contain"
          />
        ) : (
          <img
            src="./assets/Image 1.png"
            alt="benefits img"
            className="w-full h-auto object-contain"
          />
        )}
      </div>
    </div>
  );
};

export default Benefits;
