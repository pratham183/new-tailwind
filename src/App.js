import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Background from "./components/Background";

function App() {
  return (
    <div className="App">
   

       <Background/>
          {/* <Header/>
       <Hero/>
       <Features/> */}
    
       <Testimonials/>
       <Hero/>
    </div>
  );
}

export default App;
