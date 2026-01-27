import { useMediaQuery } from "react-responsive";
const comLogos = [
  { logoImg: "./assets/Logo 1.png" },
  { logoImg: "./assets/Logo 2.png" },
  { logoImg: "./assets/Logo 3.png" },
  { logoImg: "./assets/Logo 4.png" },
  { logoImg: "./assets/Logo 5.png" },
  { logoImg: "./assets/Logo 6.png" },
];
const Hero = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 650px)",
  });
  return (
    <>
      <div className="container pt-20">
        <p className="max-[300px]:text-[40px] font-normal text-center text-7xl md:text-[140px] leading-[85%] tracking-[-0.05em]">
          Browse everything.
        </p>
        {isMobile ? (
          <div className="flex justify-center items-center">
            <img src="./assets/mb-Hero image.png" alt="" />
          </div>
        ) : (
          <img style={{ width: "100%" }} src="./assets/Hero image.png" alt="" />
        )}
        <div className="company-logos">
          <p className="text-(--gray-color) mb-7 mt-12">Trusted by:</p>
          <div className="logo_con flex flex-wrap justify-center">
            {comLogos.map(({ logoImg }, index) => (
              <div
                key={index}
                className="w-1/2 sm:w-1/3 md:w-auto flex justify-center items-center p-4"
              >
                <img src={logoImg} alt="" className="max-w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
