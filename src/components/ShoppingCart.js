export default function ShoppingCart({
  cartItem,
  setBoughtItems,
  boughtItems,
}) {
  function handleRemove(boughtItems, id) {
    const newList = boughtItems.filter((boughtItem) => boughtItem.id !== id);
    setBoughtItems(newList);
  }

  return (
    <li>
      <img alt="" src={cartItem.image} />
      <p>{cartItem.cost} $</p>
      {cartItem.name}
      <button onClick={handleRemove}>remove item</button>
    </li>
  );
}
