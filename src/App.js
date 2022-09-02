import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ShoppingItem from "./components/ShoppingItem";

function App() {
  const [shopItems, setShopItems] = useState([]);
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

  console.log(shopItems);

  return (
    <div className="App">
      <Header />

      <ul>
        {shopItems.map((item) => {
          return <ShoppingItem key={item.name} article={item} />;
        })}
      </ul>
    </div>
  );
}

export default App;
