import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import Button from "@/components/Button";

interface IFoodListProps {
  id: number;
  image: string;
  description: string;
  name: string;
  category: string;
  price: number;
}

interface IOneFoodProps {
  oneFoodData: IFoodListProps | undefined;
  submitHandler: () => void;
  setQuantity: (prev: any) => void;
  quantity: number;
  setSelectedSize: (data: "small" | "large" | "") => void;
}

const FoodCard = ({
  oneFoodData,
  submitHandler,
  setQuantity,
  quantity,
  setSelectedSize,
}: IOneFoodProps) => {
  return (
    <div className=" md:m-[6rem] p-4 flex gap-12 max-sm:gap-2">
      <div className="max-sm:h-[9rem]">
        <Image
          src={oneFoodData?.image as string}
          alt={oneFoodData?.description as string}
          width={300}
          height={200}
          className="aspect-square rounded-md"
        />
      </div>
      <div>
        <div className="mb-6">
          <p className="text-4xl max-sm:text-xl font-bold mb-2">
            {oneFoodData?.name}
          </p>
          <p className="text-base mb-2 font-semibold text-slate-500">
            {oneFoodData?.description}
          </p>
          <p className="text-3xl max-sm:text-xl mb-2 font-bold">
            $ {oneFoodData?.price}
          </p>
        </div>
        <div className="flex gap-4 mb-4 items-center">
          <Button
            label="Small"
            backgroundColor="primaryBackground"
            text="primaryBackground"
            hoverColor="hoverBackground"
            hoverText="white"
            onClick={() => setSelectedSize("small")}
          />
          <Button
            label="Large"
            backgroundColor="primaryBackground"
            text="primaryBackground"
            hoverColor="hoverBackground"
            hoverText="white"
            onClick={() => setSelectedSize("large")}
          />
        </div>
        <div className="flex gap-6 items-center mb-4">
          <Button
            icon={<FaPlus />}
            backgroundColor="primaryBackground"
            text="primaryBackground"
            hoverColor="hoverBackground"
            hoverText="white"
            onClick={() => setQuantity((prev: any) => prev + 1)}
          />
          <p className="text-xl max-sm:text-base font-semibold">{quantity}</p>
          <Button
            icon={<FiMinus />}
            backgroundColor="primaryBackground"
            text="primaryBackground"
            hoverColor="hoverBackground"
            hoverText="white"
            onClick={() => setQuantity((prev: any) => prev - 1)}
          />
        </div>
        <Button
          label="Add to Cart"
          backgroundColor="primaryBackground"
          text="primaryBackground"
          hoverColor="hoverBackground"
          hoverText="white"
          onClick={submitHandler}
        />
      </div>
    </div>
  );
};

export default FoodCard;
