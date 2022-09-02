import { useEffect, useState } from "react";

export default function ShoppingItem({ article }) {
  const [articleDetails, setArticleDetails] = useState("");

  const furtherInfo = article.url;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(furtherInfo);
        const data = await response.json();
        setArticleDetails({
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
  console.log(articleDetails);
  return (
    <li>
      <img alt="" src={articleDetails.image} />
      <p>{articleDetails.cost} $</p>

      {article.name}
    </li>
  );
}
