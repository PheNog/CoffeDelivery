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
import { CoffeContext, CoffeDataProps } from "../../../../contexts/CoffesContext";
import { useContext } from "react";


interface MenuCoffesProps {
    coffeFlavor: CoffeDataProps
}

export function MenuCoffes({
    coffeFlavor
}: MenuCoffesProps) {

    const { addItemToCart, updateAmount } = useContext(CoffeContext)

    function handleAddItemToCart() {
        addItemToCart(coffeFlavor)
    }

    function handleUpdateAmount(
        id:string, 
        type:"increment" | "decrement"
    ) {
        updateAmount(id, type)
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
                            onClick={() =>  handleUpdateAmount(coffeFlavor.id, 'decrement')}
                            disabled={coffeFlavor.itemQuantity <= 1}
                            >
                            <Minus size={16} />
                        </button>
                        <InputCart
                            id='itemsAmount'
                            type='number'
                            step={1}
                            min={1}
                            max={10}
                            value={coffeFlavor.itemQuantity}
                            readOnly
                        />
                        <button
                            onClick={() => handleUpdateAmount(coffeFlavor.id, 'increment')}
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