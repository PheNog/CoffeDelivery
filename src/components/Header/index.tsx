import { BoxLocation, ButtonCartWithLabel, CartAndLocation, HeaderContainer, ItemsContainer, LabelTotalItems, LogoHeader } from "./styles"
import logoCoffe from "../../assets/coffe-logo.png"
import { MapPin, ShoppingCart } from "phosphor-react"
import { useContext } from "react"
import { CoffeContext } from "../../contexts/CoffesContext"
import { NavLink } from "react-router-dom"

export const Header = () => {

    const { cartItems } = useContext(CoffeContext)

    return (
        <HeaderContainer>
            <ItemsContainer>
                <LogoHeader src={logoCoffe} />
                <CartAndLocation>
                    <BoxLocation>
                        <MapPin
                            weight='fill'
                            size={22} />

                        São Paulo, SP
                    </BoxLocation>
                    <ButtonCartWithLabel>
                        <NavLink to='/checkout'>
                            <ShoppingCart
                                size={18}
                                weight="fill"
                            />
                        </NavLink>
                            <LabelTotalItems>{cartItems ? cartItems.length : 0}</LabelTotalItems>
                    </ButtonCartWithLabel>
                </CartAndLocation>
            </ItemsContainer>
        </HeaderContainer>
    )
}