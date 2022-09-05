
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function CartItem({ boughtItems, }) {


    return (
        <>
            <h2>Checkout</h2>
            <nav>
                <Link to="/">
                    <NavButton>Home</NavButton>
                    <Counter>{boughtItems.length}</Counter>
                </Link>
                <Link to="/cart">
                    <NavButton>Cart</NavButton>
                </Link>
            </nav>
            <CartUl>
                {boughtItems.map((item) => {
                    return (
                        <CheckoutListItem key={item.id}>
                            <img alt="" src={item.image} />
                            {item.name}
                            <span>{item.cost} $</span>
                            {/* <p>{countedTypeItems.length}</p> */}
                        </CheckoutListItem>
                    );
                })}
            </CartUl>
        </>
    );
}

const RemButton = styled.button`
  padding: 5px;
  background-color: rgb(251 27 27);
  border-radius: 50%;
  margin: 10px;
  border: 2px solid black;
  color: white;
`;
const CheckoutListItem = styled.li`
  display: grid;
  grid-template-column: 1fr;
  list-style: none;
  background-color: white;
  border-radius: 20px;
  padding: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const NavButton = styled.button`
  font-style: bold;
  border: 2px solid black;
  border-radius: 15px;
  padding: 10px;
  background-color: rgb(255, 203, 5);
  color: rgb(0 117 190);
`;

const CartUl = styled.ul`
  background-color: rgb(255, 203, 5);
  min-width: 200px;
  display: grid;
  grid-template-column: 50% 50%;
  justify-content: center;
  gap: 15px;
  padding: 15px;
`;

const Counter = styled.output`
  color: white;
  background-color: rgb(10 40 95);
  border: 2px solid black;
  border-radius: 50%;
  padding: 15px;
  margin: 10px;
`;