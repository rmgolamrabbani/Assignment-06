import { useState, useEffect } from "react";
import Banner from "./component/Banner";
import Footer from "./component/Footer";

import NavBar from "./component/NavBar";

const App = () => {
  const [models, setModels] = useState([]);

  const getModels = async () => {
    const res = await fetch("/models.json");
    const data = await res.json();
    setModels(data);
  };

  useEffect(() => {
    getModels();
  }, []);

  return (
    <>
      <NavBar />
      <Banner />
      <Footer />
    </>
  );
};

export default App;

