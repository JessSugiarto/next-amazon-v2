import { create } from 'zustand';
import { round2 } from '../models/utils';
import { OrderItem } from '../models/OrderModel';
import { persist } from 'zustand/middleware'

type Cart = {
  items: OrderItem[];
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
};

const initialState: Cart = {
  items: [],
  itemsPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
};

export const cartStore = create<Cart>()(
  persist(() => initialState,{
    name: 'cartStore'
  })
)

export default function useCartService() {
  const { items, itemsPrice, taxPrice, shippingPrice, totalPrice, increase } = cartStore(
    (state) => ({
      items: state.items,
      itemsPrice: state.itemsPrice,
      taxPrice: state.taxPrice,
      shippingPrice: state.shippingPrice,
      totalPrice: state.totalPrice,
      increase: (item: OrderItem) => increaseItem(item),
    })
  );

  const increaseItem = (item: OrderItem) => {
    const exist = items.find((x) => x.slug === item.slug);
    const updatedCartItems = exist
      ? items.map((x) => (x.slug === item.slug ? { ...exist, qty: exist.qty + 1 } : x))
      : [...items, { ...item, qty: 1 }];

    const { itemsPrice, shippingPrice, taxPrice, totalPrice } = calcPrice(updatedCartItems);

    cartStore.setState({
      items: updatedCartItems,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    });
  };

  const decreaseItem = (item: OrderItem) => {
    const exist = items.find((x) => x.slug === item.slug);
    if (!exist) return;

    const updatedCartItems =
      exist.qty === 1
        ? items.filter((x) => x.slug !== item.slug)
        : items.map((x) => (x.slug === item.slug ? { ...exist, qty: exist.qty - 1 } : x));

    const { itemsPrice, shippingPrice, taxPrice, totalPrice } = calcPrice(updatedCartItems);

    cartStore.setState({
      items: updatedCartItems,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    });
  };

  return {
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    increase: increaseItem,
    decrease: decreaseItem,
  };
}


const calcPrice = (items: OrderItem[]) => {
  const itemsPrice = round2(items.reduce((acc, item) => acc + item.price * item.qty, 0));
  const shippingPrice = round2(itemsPrice > 100 ? 0 : 100);
  const taxPrice = round2(Number(0.15 * itemsPrice));
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};
