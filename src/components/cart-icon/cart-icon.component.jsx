import { useContext } from 'react'

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';

import { CartContext } from '../../context/cart.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext)
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>0</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;