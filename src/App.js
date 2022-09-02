import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ShoppingItem from "./components/ShoppingItem";
import styled from "styled-components";
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

  console.log(boughtItems);

  return (
    <div className="App">
      <Header />

      <Menu>
        {shopItems.map((item) => {
          return (
            <ShoppingItem
              key={item.name}
              article={item}
              onSetBougthItems={setBoughtItems}
              onAddItem={addItem}
            />
          );
        })}
      </Menu>
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
