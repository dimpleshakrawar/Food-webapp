"use client";
import { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { AllFoodContext } from "@/context/allFoodContext";
import Logo from "../assets/Dil-Foods-logo.png";

const Header = () => {
  const router = useRouter();
  const context = useContext(AllFoodContext);
  if (!context) return null;
  const { cartFoodItems } = context;

  return (
    <div className="bg-primaryBackground shadow-xl fixed top-0 left-0 w-full h-16">
      <div className="flex max-sm:px-1 md:px-8 py-3 justify-center items-center gap-2">
        <div className="flex" onClick={() => router.push("/allFood")}>
          <Image
            src={Logo}
            alt="Logo"
            className="object-cover cursor-pointer bg-white rounded-xl"
            height={40}
            width={40}
            layout="intrinsic"
          />
        </div>
        <div className=" relative py-2 px-2 text-white hover:bg-red-700 hover:text-white rounded-xl">
          <button
            className="flex items-center"
            onClick={async () => await router.push("/cart")}
          >
            <FaShoppingCart size={22} />
          </button>
          <span className="text-white absolute text-md font-semibold -top-3 right-0">
            {cartFoodItems?.length || "0"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
