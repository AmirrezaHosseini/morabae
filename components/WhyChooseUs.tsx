import { FaRegCheckCircle, FaWallet, FaRedo, FaCity } from "react-icons/fa";
import { FaAccusoft } from "react-icons/fa6";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "شفافیت کامل",
      description: "تمام فرآیندها به صورت کاملاً شفاف و تحت نظارت قرار دارد.",
      icon: <FaRegCheckCircle className="w-10 h-10 text-green-500" />,
    },
    {
      title: " سرمایه‌گذاری در محدوده پول خود",
      description:
        "صرف نظر از میزان سرمایه شما، فرصت‌های مختلفی برای شروع وجود دارد.",
      icon: <FaWallet className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "خرید آسان و سریع",
      description: "در هر لحظه میتوانید خرید و سرمایه گذاری خود را انجام دهید .",
      icon: <FaRedo className="w-10 h-10 text-yellow-500" />,
    },
    {
      title: "دسترسی و بررسی فرصت ها ",
      description: " دسترسی و بررسی فرصت ها در هر مکان و زمان  یراساس نیاز و سلیقه هر فرد",
      icon: <FaCity className="w-10 h-10 text-orange-500" />,
    },
  ];

  return (
    <section className="py-4 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          چرا ما را انتخاب کنید؟
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          ما با بهره‌گیری از فناوری و رویکرد مشتری‌مدار، بهترین تجربه
          سرمایه‌گذاری را فراهم کرده‌ایم.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="mb-6">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
