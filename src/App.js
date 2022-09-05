import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ShoppingItem from "./components/ShoppingItem";
import ShoppingCart from "./components/ShoppingCart";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [shopItems, setShopItems] = useState([]);
  const [boughtItems, setBoughtItems] = useState([]);
  const shopApiUrl = "https://pokeapi.co/api/v2/item/";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(shopApiUrl);
        const data = await response.json();
        setShopItems(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  function addItem(item) {
    setBoughtItems([item, ...boughtItems]);
  }

  function Home() {
    return (
      <>
        <Header />
        <nav>
          <Link to="/Cart">
            <Nav>Cart</Nav>
            <Counter>{boughtItems.length}</Counter>
          </Link>
        </nav>
        <Menu>
          {shopItems.map((item) => {
            return (
              <ShoppingItem
                key={item.name}
                article={item}
                onAddItem={addItem}
              />
            );
          })}
        </Menu>
      </>
    );
  }

  function Cart() {
    return (
      <>
        <h2>Shopping Cart</h2>
        <nav>
          <Link to="/">
            <Nav>Home</Nav>
            <Counter>{boughtItems.length}</Counter>
          </Link>
        </nav>
        <CartUl>
          {boughtItems.map((item) => {
            return (
              <ShoppingCart
                key={item.id}
                id={item.id}
                cartItem={item}
                onSetBoughtItems={setBoughtItems}
                boughtItems={boughtItems}
              />
            );
          })}
        </CartUl>
      </>
    );
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

const Menu = styled.ul`
  background-color: rgb(255, 203, 5);
  min-width: 200px;
  list-style: none;
  display: grid;
  grid-template-column: 50% 50%;
  justify-content: center;
  gap: 15px;
  padding: 15px;
`;
const CartUl = styled.ul`
  background-color: rgb(255, 203, 5);
  min-width: 200px;
  display: grid;
  grid-template-column: 50% 50%;
  justify-content: center;
  gap: 15px;
  padding: 15px;
`;

const Counter = styled.output`
  color: white;
  background-color: rgb(10 40 95);
  border: 2px solid black;
  border-radius: 50%;
  padding: 15px;
  margin: 10px;
`;

const Nav = styled.button`
  font-style: bold;
  border: 2px solid black;
  border-radius: 15px;
  padding: 10px;
  background-color: rgb(255, 203, 5);
  color: rgb(0 117 190);
`;
