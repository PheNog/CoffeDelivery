import { ButtonCart, CardMenuContainer, CountAndButtonContainer, CountItem, ImageLabelTitleSubtitleContainer, ImageMenuItem, PriceCountCartContainer, PriceLabel, R$Label, SubTitleItem, TitleItem, TypeLabel } from "./styles";
import { ShoppingCart } from "phosphor-react";
import ImageTypeExpresso from './assets/expresso-type.svg'


export function MenuCoffes() {
    return (
        <CardMenuContainer>
            <ImageLabelTitleSubtitleContainer>
                <ImageMenuItem src={ImageTypeExpresso} />
                <TypeLabel>
                    Tradicional
                </TypeLabel>
                <TitleItem>
                    Expresso Tradicional
                </TitleItem>
                <SubTitleItem>
                    O tradicional café feito com água quente e grãos moídos
                </SubTitleItem>
            </ImageLabelTitleSubtitleContainer>
            <PriceCountCartContainer>
                <PriceLabel>
                    <R$Label>
                        R$
                    </R$Label>
                    9,90
                </PriceLabel>
                <CountAndButtonContainer>
                <CountItem 
                type='number'
                placeholder="1"
                >
                    
                </CountItem>
                <ButtonCart>
                    <ShoppingCart size={26} color='white' />
                </ButtonCart>

                </CountAndButtonContainer>
            </PriceCountCartContainer>
        </CardMenuContainer>
    )
}