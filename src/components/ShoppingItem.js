import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import styled from "styled-components";

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
    <Cards>
      <img alt="" src={articleDetails.image} />
      <p>{articleDetails.cost} $</p>
      {article.name}
      <AddButton onClick={handleClick}>+</AddButton>
    </Cards>
  );
}

const Cards = styled.li`
  background-color: white;
  border-radius: 20px;
  padding: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const AddButton = styled.button`
padding: 5px; 
background-color: rgb(0 117 190)  ; 
border-radius: 50%; 
margin: 10px; 
border: 2px solid black; 
color: white; 
`

