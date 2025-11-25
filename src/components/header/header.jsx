import { act, useState } from "react";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import DriverCard from "./cards/driver";
import CaptainSection from "./captain/captain";
import TripSection from "./trip/trip";
import AboutSection from "./about/about";
import ServiceSection from "./service/service";
const parts = [
  "عن شركه ليالي القاهره",
  "الخدمات",
  "كباتن الشركة",
  "رحلات و عروض",
];

export default function Header() {
  const [activePart, setActivePart] = useState("");
  function handlePartClick(part) {
    if (part === activePart) {
      setActivePart("");
      return;
    }
    setActivePart(part);
  }
  return (
    <div>
      <header className="flex justify-between items-center gap-2 sm:gap-0 sm:h-12 sm:flex-row flex-col bg-[#fdaf05]">
        {parts.map((part, index) => (
          <div
            key={index}
            className={
              "flex-1 flex justify-center items-center h-full cursor-pointer w-full py-2" +
              (activePart === part ? " text-white bg-[#252c36]" : "")
            }
            onClick={() => handlePartClick(part)}
          >
            {activePart === part ? (
              <TbTriangleFilled className="ml-2" size={11} />
            ) : (
              <TbTriangleInvertedFilled className="ml-2" size={11} />
            )}
            <p className="text-center font-bold">{part}</p>
          </div>
        ))}
      </header>
      {activePart === parts[0] ? <AboutSection /> : activePart === parts[1] ? <ServiceSection /> : activePart === parts[2] ? <CaptainSection />: activePart === parts[3] ? <TripSection /> : null}
      
    </div>
  );
}
