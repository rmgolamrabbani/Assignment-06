import { useState } from "react";
import Banner from "./component/Banner";
import Cart from "./component/Cart";
import Footer from "./component/Footer";
import Models from "./component/Models";
import NavBar from "./component/NavBar";
import GetStarted from "./component/GetStarted";
import Transparent from "./component/Transparent";
import Rating from "./component/Rating";
import TransformSection from "./component/TransformSection"

import { ToastContainer } from 'react-toastify'

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();

function App() {
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([])



  return (
    <>
       <NavBar carts={carts} setActiveTab={setActiveTab} />

      <Banner />

      <Rating/>

    <div className="tabs tabs-box justify-center bg-transparent gap-2">
  <input
    type="radio"
    name="my_tabs_1"
    className="tab rounded-full w-40 checked:!bg-gradient-to-r checked:!from-[#8B5CF6] checked:!to-[#A855F7] checked:!text-white border-none transition-all duration-300 shadow-md"
    aria-label="Products"
    onClick={() => setActiveTab("model")}
    defaultChecked
  />
  <input
    type="radio"
    name="my_tabs_1"
    className="tab rounded-full w-40 checked:!bg-gradient-to-r checked:!from-[#8B5CF6] checked:!to-[#A855F7] checked:!text-white border-none transition-all duration-300 shadow-md"
    aria-label={`Cart (${carts.length})`}
    onClick={() => setActiveTab("cart")}
  />
</div>

      {activeTab === "model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}/>}

      {activeTab === "cart" && <Cart  carts={carts} setCarts={setCarts}/>}

      <GetStarted/>
      <Transparent/>
      <TransformSection/>
      <Footer />

       <ToastContainer/>
    </>
  );
}

export default App;


