import { Button, Card, Divider, Title } from "@tremor/react";
import {
  useCalcTotalPrice,
  useCart,
  useCoupons,
  useRemoveFromCart,
} from "../lib/cart";
import { RESET } from "jotai/utils";
import { useState } from "react";
import { Item } from "../lib/types";

export default function CartCard() {
  const [cart, setCart] = useCart();
  const [, setSelectedCoupons] = useCoupons();
  const setRemoveFromCart = useRemoveFromCart();
  const setCalcTotalPrice = useCalcTotalPrice();
  const [error, setError] = useState<Error | null>(null);

  const { items, totalPrice } = cart;

  const removeFromCart = (product: Item) => {
    try {
      setRemoveFromCart(product);
      setCalcTotalPrice();
    } catch (e: any) {
      setError(e);
    }
  };

  const resetCart = () => {
    setCart(RESET);
    setSelectedCoupons(RESET);
  };

  return (
    <Card>
      <div className="flex justify-between">
        <Title className="text-2xl">Cart</Title>
        <Button onClick={() => resetCart()}>Remove All</Button>
      </div>
      {error && <p className="text-red-500">{error.message}</p>}
      <Divider />
      <div className="flex flex-col space-y-4">
        {items.length ? (
          items.map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              <Title className="flex-1 text-2xl">{item.name}</Title>
              <div>
                <span className="">Quantity</span>
                <p className="text-2xl">{item.quantity}</p>
              </div>
              <div className="flex flex-col items-end">
                <Title className="text-2xl">${item.price}</Title>
                <Button onClick={() => removeFromCart(item)}>Remove</Button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No items in cart</p>
        )}
      </div>
      <div className="flex justify-between mt-4">
        <Title className="text-2xl">Total</Title>
        <Title className="text-2xl">${totalPrice}</Title>
      </div>
    </Card>
  );
}
