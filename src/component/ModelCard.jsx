import { useState } from "react";
import { toast } from "react-toastify";

  const ModelCard = ({ model, carts, setCarts }) => {
  const { name, description, price, period, tag, tagType, features, icon } = model;
  const [isBuy, setIsBuy] = useState(false);

  const handleBuying = () => {
    const isFound = carts.find((item) => item.id === model.id);

    if (isFound) {
      toast.error("Item already in cart!");
      return;
    }

    setCarts([...carts, model]);
    setIsBuy(true);
    toast.success("Item added to cart!");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 relative hover:shadow-xl transition">

      {/* Tag */}
      <span className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full 
        ${tagType === "primary" && "bg-purple-100 text-purple-600"}
        ${tagType === "success" && "bg-green-100 text-green-600"}
        ${tagType === "warning" && "bg-yellow-100 text-yellow-600"}
      `}>
        {tag}
      </span>

      {/* Icon */}
      <div className="text-3xl mb-4">{icon}</div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-2">{name}</h2>

      {/* Description */}
      <p className="text-gray-500 text-sm mb-4">{description}</p>

      {/* Price */}
      <h3 className="text-2xl font-bold mb-4">
        ${price}
        <span className="text-sm text-gray-400">
          {period === "mo" ? "/mo" : period === "one-time" ? " One-Time" : ""}
        </span>
      </h3>

      {/* Features */}
      <ul className="mb-6 space-y-2 text-sm text-gray-600">
        {features?.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            ✅ {f}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={handleBuying}
        className="w-full py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium"
      >
        {isBuy ? "Added" : "Buy Now"}
      </button>
    </div>
  );
};

export default ModelCard;