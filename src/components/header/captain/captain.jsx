import DriverCard from "../cards/driver";
import driversImg from "../../../assets/drivers-large.png";
import HorizontalCard from "../cards/horizontal";
import driverImage from "../../../assets/driver.png";
const drivers = [
  {
    name: "يحيى اسلام",
    nickname: "يحيا باشا",
    rating: 5,
    image: driverImage,
    trips: 16,
  },
  {
    name: "يحيى اسلام",
    nickname: "يحيا باشا",
    rating: 5,
    image: driverImage,
    trips: 16,
  },
  {
    name: "يحيى اسلام",
    nickname: "يحيا باشا",
    rating: 5,
    image: driverImage,
    trips: 16,
  },
];
export default function CaptainSection() {
  return (
    <div className="bg-gradient-to-b from-[#303135] to-[#39414e] flex flex-wrap justify-center gap-4 p-12">
      <HorizontalCard
        image={driversImg}
        title={"اقوى وسيط للخدمات السياحية في مصر"}
        description={
          "شركة ليالي القاهرة هي وجهتك المثالية لخدمات الرفاهية والراحة في مصر، حيث تدمج في خدماتها ليموزين VIP، وخدمة المسار السريع في المطارات، إلى جانب حجز الفنادق والشقق الفندقية لتلبية جميع احتياجات عملائها بكل أناقة واحتراف. نسعى لتقديم تجارب فريدة تمثل الذوق الرفيع والخدمة المتميزة، لتكون رحلتك معنا ليس مجرد تنقّل، بل لحظة تُخلد في الذاكرة."
        }
        buttonText={"تعرف على كباتنا"}
      />
      {drivers.map((driver, index) => (
        <DriverCard
          key={index}
          name={driver.name}
          nickname={driver.nickname}
          rating={driver.rating}
          image={driver.image}
          index={index}
          trips={driver.trips}
        />
      ))}
    </div>
  );
}
