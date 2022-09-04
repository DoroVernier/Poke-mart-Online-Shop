export default function ShoppingCart({ cartItem }) {
    return (
        <li>
            <img alt="" src={cartItem.image} />
            <p>{cartItem.cost} $</p>
            {cartItem.name}
            <button>remove item</button>
        </li>
    );
}