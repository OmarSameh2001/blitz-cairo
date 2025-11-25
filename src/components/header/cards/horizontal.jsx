

export default function HorizontalCard({ image, title, description, buttonText }) {
  return (
    <div className="bg-[#fbefdf] rounded-lg lg:max-w-4/10 my-4 flex items-center overflow-hidden flex-col sm:flex-row">
      <img
        src={image}
        alt="Driver"
        className="object-cover w-full sm:max-w-1/2 md:min-w-1/3 md:h-full"
      />
      <div className="p-4 text-center w-full flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-right">{title}</h2>
        <p className="text-right">{description}</p>
        <button className="bg-[#fdaf05] py-2 px-4 rounded-md cursor-pointer hover:bg-[#e8a103] transition-colors">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
