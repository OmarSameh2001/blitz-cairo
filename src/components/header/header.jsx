import { useState } from "react";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import DriverCard from "./cards/driver";
import CaptainSection from "./captain/captain";
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
    <>
      <header className="bg-[#fdaf05] shadow">
        <div className="flex justify-between items-center h-10">
          {parts.map((part, index) => (
            <div
              key={index}
              className={
                "flex-1 flex justify-center items-center h-full cursor-pointer" +
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
        </div>
        <CaptainSection />
      </header>
    </>
  );
}
