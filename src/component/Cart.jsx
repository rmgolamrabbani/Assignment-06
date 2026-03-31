import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payement successful!");
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
    toast.success("Item deleted!");
  };

  return (
    <div className=" p-10 max-w-7xl w-[80%] mx-auto">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      {carts.length === 0 ? (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-sm border border-gray-100 min-h-[400px] flex flex-col">

    

      <div className="flex-grow flex flex-col items-center justify-center space-y-4">
        <div className="p-6 bg-gray-50 rounded-full">
         <img className="w-20 h-20" src="./shopping-cart.png" alt="" />
        </div>
        
        <p className="text-gray-400 text-lg font-medium">
          
          Your cart is empty
        </p>
        
        <button className="mt-2 px-6 py-2 bg-purple-400 text-white rounded-full hover:bg-purple-600 transition-colors text-sm">
          Buy Now
        </button>
      </div>
    </div>
      ) : (
        <>
          <div className="space-y-5 mt-4">
            {carts.map((item) => (
              <div
                className="flex items-center justify-between bg-gray-200 rounded-lg p-3"
                key={item.id}
              >
                <div className="flex  items-center gap-2">
                  <div>
                    <span className="h-40 w-40 ">
                      {item.icon}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <div className="font-bold opacity-75">${item.price}</div>
                  </div>
                </div>

                <div className="flex gap-10">                
                  <button
                    onClick={() => handleDelete(item)}
                    className=" btn rounded-full btn-error text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className=" flex justify-between bg-gray-200 p-5 mt-5 rounded-lg text-2xl font-bold">
            <div className="text-1xl opacity-50">Total</div>
            <div>$ {totalPrice}</div>
          </div>

          <button
            onClick={handlePayment}
            className="btn w-full mt-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;