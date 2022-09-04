import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ShoppingItem from "./components/ShoppingItem";
import ShoppingCart from "./components/ShoppingCart";
import styled from "styled-components";
import { isContentEditable } from "@testing-library/user-event/dist/utils";

function App() {
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

  // function removeItem(item) {
  //   setBoughtItems(newList);
  // }

  // console.log(newList);

  return (
    <div className="App">
      <Header />
      <Menu>
        {shopItems.map((item) => {
          return (
            <ShoppingItem key={item.name} article={item} onAddItem={addItem} />
          );
        })}
      </Menu>
      <h2>Shopping Cart</h2>
      {boughtItems.map((item) => {
        return (
          <ShoppingCart
            key={item.id}
            id={item.id}
            cartItem={item}
            setBoughtItems={setBoughtItems}
            boughtItems={boughtItems}
          />
        );
      })}
    </div>
  );
}

const Menu = styled.ul`
  background-color: red;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding: 15px;
`;

export default App; //
