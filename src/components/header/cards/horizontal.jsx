

export default function HorizontalCard({ image, title, description, buttonText }) {
  return (
    <div className="bg-[#fbefdf] rounded-lg lg:max-w-1/2 my-4 flex items-center overflow-hidden">
      <img
        src={image}
        alt="Driver"
        className="min-w-1/3 h-100 object-cover max-w-1/2"
      />
      <div className="p-4 text-center w-full flex flex-col gap-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="">{description}</p>
        <button className="bg-[#fdaf05] py-2 px-4 rounded-md cursor-pointer hover:bg-[#e8a103] transition-colors">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
