import { CartAndLocation, HeaderContainer, ItemsContainer } from "./styles"
import logoCoffe from "../../assets/coffe-logo.png"
import location from "../../assets/Location.png"
import { ShoppingCart } from "phosphor-react"

export const Header = () => {
    return (
        <HeaderContainer>
            <ItemsContainer>
                <img src={logoCoffe} />
                <CartAndLocation>
                    <img src={location} />
                    <button>
                        <ShoppingCart
                            size={18}
                        />
                    </button>
                </CartAndLocation>
            </ItemsContainer>
        </HeaderContainer>
    )
}