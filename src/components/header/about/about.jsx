import training from "../../../assets/images/about/training.png";
import news from "../../../assets/images/about/news.png";
import events from "../../../assets/images/about/events.png";
import pyramids from "../../../assets/images/about/pyramid.png";
import VerticalCard from "../cards/vertical";
import HorizontalCard from "../cards/horizontal";
const about = [
  {
    title: "جوده الخدمه و التدريب",
    description:
      "نحن نعمل دائمًا على تجهيز فرق العمل وتطوير مراحل الخدمة وتوحيد معايير الجدوى.",
    image: training,
  },
  {
    title: "اخر الاخبار",
    description: "تعين السيد / احمد سمير نائب رئيس مجلس الإدارة ومشرفا تنفيذي",
    image: news,
  },
  {
    title: "ابرز الاحداث",
    description: "مشاركة السيد / أيمن عادل رئيس مجلس الإدراة في إعلام الخليج",
    image: events,
  },
];
export default function AboutSection() {
  return (
    <>
      <HorizontalCard
        image={pyramids}
        title={"اقوى وسيط للخدمات السياحية في مصر"}
        description={
          "شركة ليالي القاهرة هي وجهتك المثالية لخدمات الرفاهية والراحة في مصر، حيث تدمج في خدماتها ليموزين VIP، وخدمة المسار السريع في المطارات، إلى جانب حجز الفنادق والشقق الفندقية لتلبية جميع احتياجات عملائها بكل أناقة واحتراف. نسعى لتقديم تجارب فريدة تمثل الذوق الرفيع والخدمة المتميزة، لتكون رحلتك معنا ليس مجرد تنقّل، بل لحظة تُخلد في الذاكرة."
        }
        buttonText={"تعرف على المزيد"}
      />
      {about.map((item, index) => (
        <VerticalCard
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </>
  );
}
