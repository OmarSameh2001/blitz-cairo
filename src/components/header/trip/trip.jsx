import CairoNight from "../../../assets/images/trip/cairo-night.png";
import explore from "../../../assets/images/trip/explore.png";
import hotels from "../../../assets/images/trip/hotels.png";
import limousine from "../../../assets/images/trip/limousine.png";
import HorizontalCard from "../cards/horizontal";
import VerticalCard from "../cards/vertical";

const trips = [
  {
    name: "عروض الفنادق والعقارات",
    image: hotels,
    description: "اكتشف اجدد عروض الفنادق والعقارات الفندقية",
    buttonText: "اطلب الان",
  },
  {
    name: "رحلات و اكتشافات",
    image: explore,
    description: "اكتشف مصر بعروض تشمل التنقل والإقامة والأنشطة.",
    buttonText: "اطلب الان",
  },
  {
    name: "عرض الليموزين الفاخر",
    image: limousine,
    description: "باقات ليموزين VIP للمناسبات والرحلات اليومية.",
    buttonText: "اطلب الان",
  },
];

export default function TripSection() {
  return (
    <>
      <HorizontalCard
        image={CairoNight}
        title={"ليالي القاهرة تهديك لحظات لا تُنسى"}
        description={`عيش تجربة الرفاهية بأسعار خاصة! اكتشف أحدث عروضنا على خدمات الليموزين، الفنادق، الشقق الفندقية، والرحلات، واستمتع بخدمة خمس نجوم بأقل سعر.
احجز الآن واستفد من عروضنا الموسمية على جميع خدماتنا — لأن كل رحلة مع ليالي القاهرة تستحق أن تكون مميزة.`}
        buttonText={"اسكتشف جميع العروض"}
      />
      {trips.map((trip, index) => (
        <VerticalCard
          key={index}
          image={trip.image}
          title={trip.name}
          description={trip.description}
          buttonText={trip.buttonText}
        />
      ))}
    </>
  );
}
