import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center gap-5 px-3 py-3">
      <Link to="/menu" className="text-sm text-blue-500 hover:text-blue-600">
        &larr; Back to menu
      </Link>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <ul className="mt-3 divide-y divide-stone-200 border-b">
          {cart.map((cartItem) => (
            <CartItem key={cartItem.pizzaId} item={cartItem} />
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className=" mt-6 space-x-4">
          <Button to="/order/new" type="primary">
            Order pizzas
          </Button>

          <Button
            type="secondary"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear Cart
          </Button>
        </div>
      )}
    </div>
  );
}

export default Cart;
