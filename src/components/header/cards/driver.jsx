import { FaBookmark } from "react-icons/fa6";
export default function DriverCard({
  name,
  nickname,
  rating,
  image,
  index,
  trips,
}) {
  return (
    <div className="bg-transparent rounded-lg shadow-lg max-w-fit mx-auto my-4 relative overflow-hidden min-w-fit">
      <div className="absolute -top-1 -right-2 flex items-center justify-center">
        <FaBookmark className="text-[#df760a] size-14 z-5" />
        <p className="z-10 text-white text-2xl font-black absolute pb-2">
          {index + 1}
        </p>
      </div>

      <img
        src={image}
        alt="Driver"
        className="w-full h-100 object-cover rounded-md"
      />
      <div className="p-4 text-center absolute bottom-0 w-full flex flex-col gap-2">
        <h2 className="text-xl text-white font-medium">
          {nickname} ⭐({rating})
        </h2>
        <div className="flex justify-between mb-2">
          <p className="text-[#dcddd6]">{name}</p>
          <p className="text-[#dcddd6]">{trips} رحلة</p>
        </div>
        <button className="bg-[#f29f34] w-full rounded-md py-1 font-semibold text-md cursor-pointer hover:bg-[#e88e11] transition-colors">
            اطلب الكابتن
        </button>
      </div>
    </div>
  );
}
