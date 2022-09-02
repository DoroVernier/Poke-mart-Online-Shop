export default function ShoppingItem({ shopItems }) {
    return (
        <ul>
            {shopItems.map((item) => {
                return (
                    <li key={item.name}>{item.name}</li>
                )
            })}
        </ul>

    )
}