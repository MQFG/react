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
  return(
      <main className="menu">
        <h2>Our Menu</h2>
        <ul className="pizzas">
          {pizzaData.map(pizza => (
            <Pizza pizzaData={pizza} key={pizza.name} />
            ))}
        </ul>

        {/*
        <Pizza
          name="Focaccia"
          ingredients="Bread, Cheese, Tomato"
          photoName="pizzas/focaccia.jpg"
          price={10}
        />
        <Pizza
          name="Pizza pepperoni"
          ingredients="Bread, Cheese, Tomato, pepperoni"
          photoName="pizzas/focaccia.jpg"
          price={15}
        />
        */}
      </main>
  )
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.pizzaData.photoName} alt={props.pizzaData.name} />
      <div>
        <h3>{props.pizzaData.name}</h3>
        <p>{props.pizzaData.ingredients}</p>
        <span>{props.pizzaData.price + 3}</span>
      </div>
    </div>
  );
}

function Footer(){
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //if (hour >= openHour && hour <= closeHour)
  //  alert("We're open!");
  //else
  //  alert("We're closed!");

  //console.log(hour);
  return(
    <footer className="footer">{new Date().toLocaleTimeString()} We'are currenly open</footer>
  )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);