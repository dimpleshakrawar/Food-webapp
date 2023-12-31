"use client";

import { useContext } from "react";
import CartList from "@/components/CartList";
import { AllFoodContext } from "@/context/allFoodContext";

const Cart = () => {
  const context = useContext(AllFoodContext);
  if (!context) return null;

  const { cartFoodItems, totalPrice, deleteFoodHandler } = context;
  return (
    <div className=" md:m-[6rem] p-4">
      <CartList
        cartFoodItems={cartFoodItems}
        totalPrice={totalPrice}
        deleteFoodHandler={deleteFoodHandler}
      />
    </div>
  );
};
export default Cart;
