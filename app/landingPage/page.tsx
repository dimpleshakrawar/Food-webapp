"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import FoodBg from "../../assets/bg-food.png";

const LandingPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="relative ">
        <Image
          src={FoodBg}
          alt="Food background image"
          className="w-full h-full aspect-[9/4] max-md:h-[90vh] max-sm:aspect-[3/3]"
        />
      </div>
      <div className="absolute top-[30%] w-2/3 p-4">
        <h2 className="text-white max-sm:text-2xl text-7xl max-lg:text-[2.5rem] font-bold">
          The Perfect Space to Enjoy best Foods
        </h2>
        <button
          className=" m-10 p-4 bg-white font-semibold text-xl max-sm:text-sm rounded-full hover:bg-primaryBackground hover:text-white"
          onClick={() => {
            router.push("/allFood");
          }}
        >
          Start now
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
