import comfort from "../../../assets/images/service/comfort.png";
import elegance from "../../../assets/images/service/elegance.png";
import fast from "../../../assets/images/service/fast.png";
import explore from "../../../assets/images/service/explore.png";
import VerticalCard from "../cards/vertical";

const service = [
    {
        title: "إقامتك المريحه تبدأ هنا",
        description: "احجز أفضل الفنادق والشقق الفندقية في القاهرة بمعايير فخامة وراحة.",
        image: comfort,
        buttonText: "استعرض الاقامات",
    },
    {
        title: "تنقّل بأناقة وراحة",
        description: "أسطول سيارات فاخرة وعائلية مع سائقين محترفين.",
        image: elegance,
        buttonText: "احجز سياراتك الان",
    },
    {
        title: "ابدأ رحلتك فورًا",
        description: "استقبال وتوديع لكبار الزوار في مطارات القاهرة، شرم الشيخ، الغردقة.....",
        image: fast,
        buttonText: "استمتع بتجربتك الآن",
    },
    {
        title: "رحلات واستكشافات",
        description: "استمتع بجولات سياحية وتنزّهات في أجمل معالم مصر.",
        image: explore,
        buttonText: "اكتشف الرحلات",
    },
]
export default function ServiceSection() {
    return (
        <>
            {service.map((item, index) => (
                <VerticalCard
                    key={index}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    buttonText={item.buttonText}
                    fill={true}
                />
            ))}
        </>
    );
}