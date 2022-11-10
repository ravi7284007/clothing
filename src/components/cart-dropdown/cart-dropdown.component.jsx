import { useNavigate } from 'react-router-dom/dist';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
    CartDropdowContainer,
    EmptyMessage,
    CartItems
} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <CartDropdowContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))) : (<EmptyMessage>Your Cart is empty</EmptyMessage>)
                }
                <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
            </CartItems>
        </CartDropdowContainer>
    )
}


export default CartDropdown;