"use client";

import { useContext } from "react";
import CartList from "@/components/CartList";
import { AllFoodContext } from "@/context/allFoodContext";

const OrderSummary = () => {
  const isOrderSummary = true;
  const context = useContext(AllFoodContext);
  if (!context) return null;

  const { cartFoodItems, totalPrice, deleteFoodHandler } = context;
  return (
    <div className="flex justify-center p-2">
      <CartList
        cartFoodItems={cartFoodItems}
        totalPrice={totalPrice}
        deleteFoodHandler={deleteFoodHandler}
        isOrderSummary={isOrderSummary}
      />
    </div>
  );
};

export default OrderSummary;
