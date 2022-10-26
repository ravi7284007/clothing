import { useContext } from 'react';
import { useNavigate } from 'react-router-dom/dist';

import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <div className="cart-dropdown-container">
            <div className="cart-item">
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
                <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
            </div>
        </div>
    )
}


export default CartDropdown;