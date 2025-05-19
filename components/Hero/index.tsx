import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 dark:bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat dark:opacity-30"
        style={{
          backgroundImage: "url('/images/hero/hero-bg.jpg')", // ← your image path
        }}
      ></div>
      {/* Color Overlay for Light/Dark Mode */}
      <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70"></div>
      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">
        <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-black md:text-5xl dark:text-white">
          আপনার মাদ্রাসার পূর্ণাঙ্গ ব্যবস্থাপনা সমাধান
        </h1>
        <p className="mb-8 text-lg font-medium text-gray-700 dark:text-gray-300">
          আধুনিক সফটওয়্যার যা শিক্ষার্থী, শিক্ষক, ফি, পরীক্ষা, হাজিরা, হোস্টেল
          ও এসএমএসসহ সবকিছু পরিচালনা করবে এক প্ল্যাটফর্মে।
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#demo"
            className="rounded-lg bg-green-600 px-10 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            ডেমো দেখুন
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
