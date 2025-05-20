import { Feature } from "@/types/feature";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top shadow-solid-3 hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark z-40 rounded-lg border border-gray-100 bg-white p-7.5 text-center transition-all md:text-start xl:p-12.5"
      >
        <div className="bg-primary relative mx-auto flex h-16 w-16 items-center justify-center rounded-[4px] md:mx-0">
          {icon}
        </div>
        <h3 className="mt-7.5 mb-5 text-xl font-semibold text-black dark:text-white">
          {title}
        </h3>
        <p className="text-lg text-black dark:text-slate-300">{description}</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
