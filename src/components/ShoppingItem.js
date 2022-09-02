import { useEffect, useState } from "react";

export default function ShoppingItem({ article }) {
  const [articleDetails, setArticleDetails] = useState("");

  const furtherInfo = article.url;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(furtherInfo);
        const data = await response.json();
        setArticleDetails(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [furtherInfo]);
  console.log(articleDetails);
  return <li>{article.name}</li>;
}
