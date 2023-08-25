import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
      name: "Focacia",
      ingredients: "Bread, Cheese, Tomato",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false
  },
  {
      name: "Pizza Magrherita",
      ingredients: "Tomato and mozzarella",
      price: 10,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false
  },
  {
      name: "Pizza Peperonni",
      ingredients: "Tomato and mozzarella",
      price: 10,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false
  },
  {
      name: "Pizza Hawai",
      ingredients: "Tomato and mozzarella",
      price: 10,
      photoName: "pizzas/focaccia.jpg",
      soldOut: true
  }
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header(){
  //const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {  };
  return(
    <header>
      <h1 style={ style } className="header">Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu(){
  const pizzas = pizzaData
  //const pizzas = [];
  const numPizzas = pizzas.length;
  return(
      <main className="menu">
        <h2>Our Menu</h2>

        <p>
          vhkwjehvrlerjh ewkjvhwjvhwekjrv kwejvhkewjhv  kejvhlwejkhvewjkvh jkvehlk hv kjñlkjñlkj
        </p>

        {numPizzas > 0 ? (
          <React.Fragment>
            <ul className="pizzas">
            {pizzaData.map(pizza => (
              <Pizza pizzaData={pizza} key={pizza.name} />
              ))}
            </ul>
          </React.Fragment>
        ) : <p>We're still  working on our menu</p>}
      </main>
  )
}

function Pizza({ pizzaData }) {
  return (
    <li className={'pizza ${pizzaData.soldOut ? "soldout" : ""}'}>
      <img src={pizzaData.photoName} alt={pizzaData.name} />
      <div>
        <h3>{pizzaData.name}</h3>
        <p>{pizzaData.ingredients}</p>
        <span>{pizzaData.soldOut ? "SOLD OUT" : pizzaData.price + 3}</span>
      </div>
    </li>
  );
}

function Footer(){
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return(
    <footer className="footer">
      {isOpen ? <Order closeHour={openHour} /> : (<p>We're happy to wolcome you between {openHour}:00 and {closeHour}:00.</p>)
      }
    </footer>
  )
}

function Order({openHour, closeHour}){
  return <div className="order">
  <p>
    We're open from {openHour}:00 to {closeHour}:00. Order online
  </p>
  <button className="button">Order</button>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);