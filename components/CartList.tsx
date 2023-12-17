import Image from "next/image";
import Button from "./Button";

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
}

type TCartProps = {
  cartFoodItems: ICartItem[] | undefined;
  totalPrice: number | 0;
};

export default function CartList({ cartFoodItems, totalPrice }: TCartProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-8 md:m-[6rem] p-4 ">
      {cartFoodItems?.length ? (
        <>
          {cartFoodItems?.map((data: any) => (
            <div
              key={data.id}
              className="flex gap-2 w-[27rem] p-2 border-2 border-gray-300"
            >
              <div className="w-[6rem] h-[6rem]">
                <Image
                  src={data.image}
                  alt={data.description}
                  width={600}
                  height={600}
                  className="aspect-square rounded-md"
                />
              </div>
              <div className="w-[20rem] max-sm:w-[10rem]">
                <div className="flex justify-between mb-1">
                  <h2 className="text-xl font-semibold">{data.name}</h2>
                  <h2 className="text-lg font-semibold text-primaryBackground">
                    {data.price}
                  </h2>
                </div>
                <div className="flex justify-between font-semibold mb-4">
                  <h2 className="font-semibold text-primaryBackground">
                    {data.size}
                  </h2>
                  <h2 className=" font-semibold">
                    {data.quantity} * {data.price}
                  </h2>
                </div>
                <hr className=" bg-slate-500" />
                <div className="flex justify-between">
                  <h2 className="font-semibold">Total- ${data.total}</h2>
                  <button>Delete</button>
                </div>
              </div>
            </div>
          ))}
          <div>
            <span className="text-lg font-semibold">Net Total- </span>
            <span className="text-primaryBackground text-xl font-bold">
              $ {totalPrice}
            </span>
          </div>
          <Button
            label="Proceed to Payment"
            backgroundColor="primaryBackground"
            text="primaryBackground"
            hoverColor="hoverBackground"
            hoverText="white"
          />
        </>
      ) : (
        <h2 className="text-3xl text-gray-400 text-center">
          Cart is Empty!! &#9785;
        </h2>
      )}
    </div>
  );
}
