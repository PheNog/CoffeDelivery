import {
    ButtonCart,
    CardMenuContainer,
    CoffeFlavorName,
    CoffeTypeLabel,
    CountAndButtonContainer,
    ImageLabelTitleSubtitleContainer,
    ImageMenuItem,
    PriceCountCartContainer,
    PriceLabel,
    R$Label,
    CoffeFlavorDescription,
    ContainerLabelsCoffeType,
    InputCart,
    InputAndButtonsContainer,

} from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CoffeContext, CoffeDataProps } from "../../contexts/CoffesContext";
import { useContext, useState } from "react";


interface MenuCoffesProps {
    coffeFlavor: CoffeDataProps
}

export function MenuCoffes({
    coffeFlavor
}: MenuCoffesProps) {
    const { addItemToCart } = useContext(CoffeContext)

    const [amountItem, setAmountItem] = useState(1)
    coffeFlavor.itemQuantity = amountItem

    function handleIncrement() {
        setAmountItem(state => state + 1)
    }

    function handleDecrement() {
        setAmountItem(state => state - 1)
    }

    function handleAddItemToCart() {
        addItemToCart(coffeFlavor)
    }


    return (
        <CardMenuContainer>
            <ImageLabelTitleSubtitleContainer>
                <ImageMenuItem src={coffeFlavor.coffeImage} />
                <ContainerLabelsCoffeType>
                    {
                        coffeFlavor.coffeType.map((type) => {
                            return (
                                <CoffeTypeLabel
                                    key={type}
                                >
                                    {type}
                                </CoffeTypeLabel>
                            )
                        })
                    }
                </ContainerLabelsCoffeType>
                <CoffeFlavorName>
                    {coffeFlavor.coffeFlavorName}
                </CoffeFlavorName>
                <CoffeFlavorDescription>
                    {coffeFlavor.coffeFlavorDescription}
                </CoffeFlavorDescription>
            </ImageLabelTitleSubtitleContainer>
            <PriceCountCartContainer>
                <PriceLabel>
                    <R$Label>
                        R$
                    </R$Label>
                    {coffeFlavor.coffePrice.toString()}0
                </PriceLabel>
                <CountAndButtonContainer>
                    <InputAndButtonsContainer>
                        <button
                            onClick={() => handleDecrement()}
                            disabled={amountItem <= 1}>
                            <Minus size={16} />
                        </button>
                        <InputCart
                            id='itemsAmount'
                            type='number'
                            step={1}
                            min={1}
                            max={10}
                            value={amountItem}
                            readOnly
                        />
                        <button
                            onClick={() => handleIncrement()}
                            >
                            <Plus size={16} />
                        </button>
                    </InputAndButtonsContainer>
                    <ButtonCart
                        onClick={handleAddItemToCart}
                    >
                        <ShoppingCart size={26} weight="fill" color='white' />
                    </ButtonCart>
                </CountAndButtonContainer>
            </PriceCountCartContainer>
        </CardMenuContainer>
    )
}