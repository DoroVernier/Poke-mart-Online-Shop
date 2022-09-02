import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export default function ShoppingItem({ article, onAddItem }) {
  const [articleDetails, setArticleDetails] = useState("");

  const furtherInfo = article.url;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(furtherInfo);
        const data = await response.json();
        setArticleDetails({
          id: nanoid(),
          image: data.sprites.default,
          cost: data.cost,
          name: data.name,
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [furtherInfo]);

  function handleClick(id) {
    const newItem = {
      id: nanoid(),
      image: articleDetails.image,
      cost: articleDetails.cost,
      name: article.name,
    };
    onAddItem(newItem);
  }

  return (
    <li>
      <img alt="" src={articleDetails.image} />
      <p>{articleDetails.cost} $</p>
      {article.name}
      <button onClick={handleClick}>add item</button>
    </li>
  );
}
