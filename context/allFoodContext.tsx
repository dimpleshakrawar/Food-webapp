"use client";

import { ReactNode, createContext, useState, useEffect } from "react";

import FoodData from "../foodList.json";

type TFoodDataProviderProp = {
  children: ReactNode;
};

interface IFoodListProps {
  id: number;
  image: string;
  description: string;
  name: string;
  category: string;
  price: number;
}

interface ICartItem extends IFoodListProps {
  quantity: string;
  size: "small" | "large";
  total: number;
}

type TContext = {
  foodData: IFoodListProps[] | null;
  oneFoodHandler: (foodInfo: any) => void;
  oneFoodData: IFoodListProps | undefined;
  addToCartHandler: (data: any) => void;
  cartFoodItems: ICartItem[] | undefined;
  totalPrice: number;
  deleteFoodHandler: (id: number) => void;
};

export const AllFoodContext = createContext<TContext | null>(null);

const FoodDataProvider = ({ children }: TFoodDataProviderProp) => {
  const [foodData, setFoodData] = useState<Array<IFoodListProps>>(FoodData);
  const [oneFoodData, setOneFoodData] = useState<IFoodListProps | undefined>();
  const [cartFoodItems, setCartFoodItems] = useState<ICartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const oneFoodHandler = (foodId: any) => {
    foodData.map((data) => {
      if (data.id === foodId) {
        setOneFoodData(data);
      }
    });
  };

  const addToCartHandler = (data: any) => {
    const quantity = parseInt(data.quantity, 10);
    const price = parseFloat(data.price);
    const total = quantity * price;

    const finalData: ICartItem = { ...data, quantity, price, total };
    setCartFoodItems((prev: any) => {
      const prevArray = prev || [];
      return [...prevArray, finalData];
    });
  };

  const deleteFoodHandler = (id: number) => {
    const filterData = cartFoodItems.filter((data) => data.id !== id);
    setCartFoodItems(filterData);
  };

  useEffect(() => {
    const totalPrice = (cartFoodItems || []).reduce(
      (acc, item) => acc + item.total,
      0
    );
    setTotalPrice(totalPrice);
  }, [cartFoodItems]);

  return (
    <AllFoodContext.Provider
      value={{
        foodData,
        oneFoodData,
        oneFoodHandler,
        addToCartHandler,
        cartFoodItems,
        totalPrice,
        deleteFoodHandler,
      }}
    >
      {children}
    </AllFoodContext.Provider>
  );
};

export default FoodDataProvider;
