import { useState } from "react";
import "./App.css";

import Header from "./Components/Header/header";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
   
      <Header />
      <Banner/>
      <Footer />
    </>
  );
}

export default App;
