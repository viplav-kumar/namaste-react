import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const increaseQty = (id) => {};

  const decreaseQty = (id) => {};

  const removeItem = (id) => {};

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

          {cartItems.length === 0 && (
            <p className="text-gray-500">Your cart is empty</p>
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
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
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
      </div>
    </div>
  );
};

export default Cart;
