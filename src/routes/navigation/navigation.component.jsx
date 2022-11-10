import { React, Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectCurrentUser } from "../../store/user/user.selector";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles.jsx';

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
// import { CartContext } from "../../context/cart.context";

// import { UserContext } from "../../context/user.context";

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutUser } from '../../utils/firebase/firebase.utils'

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)
    // const { currentUser } = useContext(UserContext)
    // const { isCartOpen } = useContext(CartContext)

    const isCartOpen = useSelector(selectIsCartOpen)

    const signOutHandler = async () => {
        await signOutUser();

    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        Shop
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutHandler}>Sign Out</NavLink>)
                            : (<NavLink to='/auth'>
                                Sign In
                            </NavLink>
                            )
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;