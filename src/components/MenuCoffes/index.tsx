import {
    ButtonCart,
    CardMenuContainer,
    CoffeFlavorName,
    CoffeTypeLabel,
    CountAndButtonContainer,
    CountItem,
    ImageLabelTitleSubtitleContainer,
    ImageMenuItem,
    PriceCountCartContainer,
    PriceLabel,
    R$Label,
    CoffeFlavorDescription,
    ContainerLabelsCoffeType,

} from "./styles";
import { ShoppingCart } from "phosphor-react";


interface MenuCoffesProps {
    id: string
    coffeImage: string
    coffeType: string[]
    coffeFlavorName: string
    coffeFlavorDescription: string
    coffePrice: number
    itemQuantity: number
}

export function MenuCoffes({
    id,
    coffeType,
    coffeImage,
    coffeFlavorName,
    coffeFlavorDescription,
    coffePrice,
    itemQuantity
}: MenuCoffesProps) {
    
    return (
        <CardMenuContainer>
            <ImageLabelTitleSubtitleContainer>
                <ImageMenuItem src={coffeImage} />
                <ContainerLabelsCoffeType>
                    {
                        coffeType.map((type) => {
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
                    {coffeFlavorName}
                </CoffeFlavorName>
                <CoffeFlavorDescription>
                    {coffeFlavorDescription}
                </CoffeFlavorDescription>
            </ImageLabelTitleSubtitleContainer>
            <PriceCountCartContainer>
                <PriceLabel>
                    <R$Label>
                        R$
                    </R$Label>
                    {coffePrice.toString()}0
                </PriceLabel>
                <CountAndButtonContainer>
                    <CountItem
                        id='itemsAmount'
                        type='number'
                        step={1}
                        min={1}
                        max={10}
                    >
                    </CountItem>
                    <ButtonCart>
                        <ShoppingCart size={26} weight="fill"  color='white' />
                    </ButtonCart>
                </CountAndButtonContainer>
            </PriceCountCartContainer>
        </CardMenuContainer>
    )
}