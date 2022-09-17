
import './App.css';
import * as React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { NavigationBar } from './components/NavigationBar';
import { Cards } from './components/Cards';
import data from "./data/data.json";
import { useState } from "react";


//Merging, creating and defining props and state variables for required component.
// The App function to wrap all the functions
function App() {
 // counter state
 const [itemCount, setItemCount] = useState(0);

 //function to check type of button for calling related functions
 const manageItems = (event) => {
   if (event.target.innerText === "Add to cart") {
     addItem(event);

   } else if(event.target.innerText === "Remove from cart") {
     removeItem(event);
   }
 }

 //add item function to increase item count
 const addItem = (event) => {
   setItemCount(() => itemCount + 1);
   event.target.innerText = "Remove from cart";
   event.target.classList.value = "btn btn-outline-danger mt-auto";
 };

 //remove item function to decrease item count
 const removeItem = (event) => {
   setItemCount(() => itemCount - 1);
   event.target.innerText = "Add to cart";
   event.target.classList.value = "btn btn-outline-dark mt-auto";
 };


  return (
    <>
    <div className="App">
     <NavigationBar itemCount={itemCount} />
      <Header />
      <Cards data={data} manageItems={manageItems} />
      <Footer />
    </div>
    </>
  );
}

export default App;
