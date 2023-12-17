"use client";

import { useContext } from "react";
import CartList from "@/components/CartList";
import { AllFoodContext } from "@/context/allFoodContext";

const Cart = () => {
  const context = useContext(AllFoodContext);
  if (!context) return null;

  const { cartFoodItems, totalPrice, deleteFoodHandler } = context;
  return (
    <div>
      <CartList
        cartFoodItems={cartFoodItems}
        totalPrice={totalPrice}
        deleteFoodHandler={deleteFoodHandler}
      />
    </div>
  );
};
export default Cart;
