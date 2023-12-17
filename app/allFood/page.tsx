"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { AllFoodContext } from "@/context/allFoodContext";

const AllFood = () => {
  const context = useContext(AllFoodContext);
  const router = useRouter();

  if (!context) {
    return null;
  }
  const { foodData, oneFoodHandler } = context;

  const foodCardHandler = (id: number) => {
    oneFoodHandler(id);
    router.push(`/allFood/${id}`);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
      className="p-6"
    >
      <h2 className="text-3xl font-semibold text-slate-600">
        Menu that Always makes you Fall in Love
      </h2>
      <div className="p-14 max-sm:p-8 flex gap-10 justify-between flex-wrap">
        {foodData?.map((food: any) => (
          <div
            key={food.id}
            className="cursor-pointer "
            onClick={() => foodCardHandler(food.id)}
          >
            <div className="w-[13rem] h-[13rem] rounded-lg">
              <Image
                src={food.image}
                alt={food.description}
                width={300}
                height={200}
                className="aspect-square rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              />
            </div>
            <div className="p-1">
              <p className="text-lg font-semibold">{food.name}</p>
              <p className="text-lg font-bold text-primaryBackground">
                $ {food.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AllFood;
