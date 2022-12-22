import { BoxLocation, ButtonCartWithLabel, CartAndLocation, HeaderContainer, ItemsContainer, LabelTotalItems, LogoHeader } from "./styles"
import logoCoffe from "../../assets/coffe-logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react"
import { useContext, useState } from "react"
import { CoffeContext } from "../../contexts/CoffesContext"
import { useNavigate } from "react-router-dom"

interface LocationData {
    city: string,
    state: string
}

export const Header = () => {

    const [location, setLocation] = useState<LocationData>()
    const { cartItems } = useContext(CoffeContext)
    const navigate = useNavigate()

    function handleNavigate() {
        navigate(`checkout`)
    }

    async function componentDidMount() {
        navigator.geolocation.getCurrentPosition(function (position) {
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyC_hqsCfff2Ea44mQ35bPAkeYVIRwsXoWM`)
                .then(data => data.json())
                .then(data => {
                    const dataToSend = {
                        city: data.results[0].address_components[3].long_name,
                        state: data.results[0].address_components[4].short_name
                    }
                    setLocation(dataToSend)
                })
        });
    }

    componentDidMount()
    return (
        <HeaderContainer>
            <ItemsContainer>
                <a href="/"><LogoHeader  src={logoCoffe} /></a>
                <CartAndLocation>
                    <BoxLocation>

                        {!location ? (
                            <>
                                <MapPin
                                    weight='fill'
                                    size={22}
                                /> <>Localizando...</>
                            </>)
                            : <>
                                <MapPin
                                    weight='fill'
                                    size={22}
                                />
                                <>{location?.city}</>,
                                <> {' '}{location?.state}</>
                            </>
                        }
                    </BoxLocation>
                    <ButtonCartWithLabel
                        onClick={handleNavigate}
                    >
                        <ShoppingCart
                            size={18}
                            weight="fill"
                        />
                    </ButtonCartWithLabel>
                        <LabelTotalItems>{''}{cartItems ? cartItems.length : 0}</LabelTotalItems>
                </CartAndLocation>
            </ItemsContainer>
        </HeaderContainer>
    )
}