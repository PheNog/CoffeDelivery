import { BoxLocation, ButtonCartWithLabel, CartAndLocation, HeaderContainer, ItemsContainer, LogoHeader } from "./styles"
import logoCoffe from "../../assets/coffe-logo.png"
import { MapPin, ShoppingCart } from "phosphor-react"

export const Header = () => {
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
                        <ShoppingCart
                            size={18}
                            weight="fill"
                        />
                    </ButtonCartWithLabel>
                </CartAndLocation>
            </ItemsContainer>
        </HeaderContainer>
    )
}