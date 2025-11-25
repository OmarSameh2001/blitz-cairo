export default function VerticalCard({
  image,
  title,
  description,
  buttonText,
  fill=false, // when there is 4 vertical cards in a row
}) {
  return (
    <div className={`bg-[#fbefdf] rounded-lg my-4 flex flex-col items-center overflow-hidden min-w-fit sm:min-w-75 lg:min-w-3/16 xs:h-[60vh] ${fill ? "max-w-7/32" : "max-w-6/32"}`}>
      <img
        src={image}
        alt={title}
        className="h-full max-h-1/2 w-full object-fill"
      />
      <div className="p-4 text-center w-full flex flex-col gap-2 h-full">
        <p className="text-lg font-semibold">{title}</p>
        <p className={!buttonText && "mt-3" + "text-xs text-[#373F4C] font-normal"}>{description}</p>
        {buttonText && (
          <div className="flex items-center flex-col justify-end mt-auto w-full">
            <button className="bg-[#fdaf05] py-2 px-4 rounded-md cursor-pointer hover:bg-[#e8a103] transition-colors flex-end w-full">
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
