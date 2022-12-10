import { Trash } from "phosphor-react";
import { dataCoffesFlavor } from "../../../../components/MenuCoffes/dataCoffes";
import { ButtonRemoveCart, ContainerItemCart, ImageCoffeCart, InputNumberCart, LabelNameItemCart, LabelPriceCart, NameInputContainer, RowInputButton, RowNamePrice } from "./styles";

export function ItemCart() {
    return (
        <ContainerItemCart>
            <ImageCoffeCart
                src={dataCoffesFlavor[0].coffeImage}
            />
            <NameInputContainer>
                <RowNamePrice>
                    <LabelNameItemCart>Expresso Tradicional</LabelNameItemCart>
                    <LabelPriceCart>R$ 9,90</LabelPriceCart>
                </RowNamePrice>
                <RowInputButton>
                    <InputNumberCart type='number'>

                    </InputNumberCart>
                    <ButtonRemoveCart>
                        <Trash 
                            size={16}
                        />
                        REMOVER
                    </ButtonRemoveCart>
                </RowInputButton>
            </NameInputContainer>

        </ContainerItemCart>
    )
}