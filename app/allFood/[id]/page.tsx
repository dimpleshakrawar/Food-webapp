"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import FoodCard from "@/components/FoodCard";
import { AllFoodContext } from "@/context/allFoodContext";

const OneFood = () => {
  const router = useRouter();
  const context = useContext(AllFoodContext);
  const [selectedSize, setSelectedSize] = useState<"small" | "large" | "">("");
  const [quantity, setQuantity] = useState<number>(0);

  if (!context) {
    return null;
  }

  const { oneFoodData, addToCartHandler } = context;
  const submitHandler = () => {
    if (selectedSize && quantity > 0) {
      alert("Items are added to the cart!!");
      router.push("/allFood");
      const cartItem = {
        ...oneFoodData!,
        size: selectedSize,
        quantity: quantity,
      };

      addToCartHandler(cartItem);
    }
  };
  return (
    <FoodCard
      oneFoodData={oneFoodData}
      submitHandler={submitHandler}
      setQuantity={setQuantity}
      quantity={quantity}
      setSelectedSize={setSelectedSize}
    />
  );
};

export default OneFood;
