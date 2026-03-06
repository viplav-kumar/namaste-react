import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  reduceItem,
  removeItem,
} from "../store/feature-slice/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const increaseQty = (item) => {
    dispatch(addItem(item));
  };
  const decreaseQty = (id) => {
    dispatch(reduceItem(id));
  };
  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div
          className={` bg-white rounded-xl shadow p-6 ${cartItems.length === 0 ? "w-10/12 m-auto md:col-span-3" : "md:col-span-2"}`}
        >
          <h2 className="text-2xl font-bold mb-6 inline-block border-blue-500 border-b-2">
            Cart
          </h2>
          <p className="border-b-8 border-gray-100 -mx-8"></p>

          {cartItems.length === 0 && (
            <img
              className="w-65 m-auto"
              alt="Your cart is empty"
              src="../../images/placeholders/empty-cart.png"
            ></img>
          )}

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-500">₹{item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="w-8 h-8 flex items-center justify-center border rounded"
                >
                  -
                </button>

                <span className="font-medium">{item.quantity}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="w-8 h-8 flex items-center justify-center border rounded"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => deleteItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        {cartItems.length !== 0 ? (
          <div className="bg-white rounded-xl shadow p-6 h-fit">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Delivery Fee</span>
              <span>₹40</span>
            </div>

            <div className="border-t my-3"></div>

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{total + 40}</span>
            </div>

            <button className="w-full mt-5 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600">
              Proceed to Checkout
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
