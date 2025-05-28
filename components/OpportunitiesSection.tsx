"use client";

import { Building2, PieChart, ShieldCheck, Lightbulb } from "lucide-react";

export default function OpportunitiesSection() {
  return (
    <section
      id="opportunities"
      className="bg-white py-16 px-4 sm:px-6 lg:px-16"
    >
      <div className="max-w-6xl mx-auto text-right">
        {/* تیتر اصلی */}
        <h2 className="text-3xl font-bold text-[#2cc49b] mb-6">
          فرصت‌های سرمایه‌گذاری در مربع
        </h2>

        {/* توضیح کلی */}
        <p className="text-gray-700 text-lg leading-8 mb-10">
          در <strong>مربع</strong>، دو مدل مطمئن برای سرمایه‌گذاری فراهم شده:
          شرکت در <strong>پیش‌فروش پروژه‌ها</strong> و <strong>خرید سهام</strong> در طرح‌های مشارکتی. هر کدام از این مدل‌ها متناسب با شرایط سرمایه‌گذار طراحی شده‌اند و بازدهی بالا را در کنار شفافیت و امنیت به همراه دارند.
        </p>

        {/* بخش دو مدل سرمایه‌گذاری */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* پیش‌فروش پروژه‌ها */}
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-[#2cc49b]" />
              <h3 className="text-xl font-semibold text-gray-800">
                پیش‌فروش پروژه‌های ساختمانی
              </h3>
            </div>
            <p className="text-gray-600 leading-7">
              سرمایه‌گذاری در مراحل اولیه پروژه‌های ساختمانی با امکان بررسی کامل مشخصات فنی، موقعیت مکانی، متراژ، مصالح و شرایط اجرا. تمام اطلاعات پروژه‌ها پیش از تصمیم‌گیری در اختیار شما قرار می‌گیرد.
            </p>
          </div>

          {/* خرید سهام پروژه‌ها */}
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <PieChart className="w-8 h-8 text-[#2cc49b]" />
              <h3 className="text-xl font-semibold text-gray-800">
                خرید سهام مشارکتی
              </h3>
            </div>
            <p className="text-gray-600 leading-7">
              با خرید سهام پروژه‌ها در سود اجرای آن شریک می‌شوید. <strong className="text-[#2cc49b]">حداقل سود سالیانه ۳۰٪</strong> بر اساس عملکرد پروژه تعیین شده و در صورت داشتن تعداد کافی سهم، امکان تبدیل آن به واحد ملکی نیز وجود دارد.
            </p>
          </div>
        </div>

        {/* تیتر جدید برای بخش تضمین‌ها */}
        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-r-4 pr-4 border-[#2cc49b]">
          بررسی و تضمین کیفیت پروژه‌ها
        </h3>

        {/* بخش بررسی و بهره‌برداری */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* بررسی پروژه‌ها */}
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-16 h-16 mt-1 text-[#2cc49b]" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                ارزیابی فنی و کارشناسی پروژه‌ها
              </h4>
              <p className="text-gray-600 leading-7">
                تمام پروژه‌های پیشنهادی قبل از عرضه در پلتفرم، توسط تیم تخصصی ارزیابی می‌شوند. این بررسی شامل تحلیل موقعیت جغرافیایی، مصالح، سابقه کارفرما، مجوزها و برآورد مالی است. تنها طرح‌هایی تأیید می‌شوند که از نظر بازدهی و ریسک در سطح قابل قبول باشند.
              </p>
            </div>
          </div>

          {/* بهره‌برداری مطمئن */}
          <div className="flex items-start gap-4">
            <Lightbulb className="w-16 h-16  text-[#2cc49b]" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                اجرا و بهره‌برداری توسط کارفرمایان معتبر
              </h4>
              <p className="text-gray-600 leading-7">
                پروژه‌ها توسط سازندگان باسابقه و معتبر اجرا می‌شوند و تحت نظارت مستمر تیم مربع هستند. این امر موجب کاهش ریسک اجرایی و تضمین بازدهی نهایی برای سرمایه‌گذاران خواهد شد.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
