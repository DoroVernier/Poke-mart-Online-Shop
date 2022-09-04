import styled from "styled-components";

export default function ShoppingCart({
  cartItem,
  onSetBoughtItems,
  boughtItems,
}) {
  function handleRemove(itemId) {
    const newList = boughtItems.filter(
      (boughtItem) => boughtItem.id !== itemId
    );
    onSetBoughtItems(newList);
  }

  return (
    <Cards>
      <img alt="" src={cartItem.image} />
      <p>{cartItem.cost} $</p>
      {cartItem.name}
      <RemButton onClick={handleRemove}>X</RemButton>
    </Cards>
  );
}
 
const RemButton = styled.button`
padding: 5px; 
background-color: rgb(251 27 27) ; 
border-radius: 50%; 
margin: 10px; 
border: 2px solid black; 
color: white; 
`;
const Cards = styled.li`
display: grid; 
grid-template-column: 1fr;
list-style: none;
  background-color: white;
  border-radius: 20px;
  padding: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

