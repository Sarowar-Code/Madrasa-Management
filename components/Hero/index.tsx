import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex h-[700px] items-center justify-center overflow-hidden px-4 md:min-h-screen dark:bg-black">
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
        <h1 className="mb-6 text-3xl leading-tight font-bold text-black md:text-5xl dark:text-white">
          মাদরাসা ব্যবস্থাপনার
          <br /> জন্য আধুনিক ডিজিটাল
          <br /> সমাধান।
        </h1>
        <p className="mb-8 text-xl font-medium tracking-wide text-black dark:text-gray-200">
          আধুনিক সফটওয়্যার যা শিক্ষার্থী, শিক্ষক, ফি, পরীক্ষা, হাজিরা, হোস্টেল{" "}
          ও এসএমএসসহ সবকিছু পরিচালনা করবে এক প্ল্যাটফর্মে।
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#demo"
            className="bg-primary hover:bg-primaryho rounded-sm px-10 py-3 text-xl font-semibold text-white transition"
          >
            ডেমো দেখুন
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
