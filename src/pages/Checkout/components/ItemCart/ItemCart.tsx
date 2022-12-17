import { Minus, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeContext, CoffeDataProps } from "../../../../contexts/CoffesContext";
import { toBrlPt } from "../../../../utils/methods";
import { ButtonRemoveCart, ContainerItemCart, ImageCoffeCart, InputAndButtonsContainer, InputCart, InputNumberCart, LabelNameItemCart, LabelPriceCart, NameInputContainer, RowInputButton, RowNamePrice } from "./styles";

interface ItemCartProps {
    item: CoffeDataProps
}


export function ItemCart({ item }: ItemCartProps) {
    const { removeItemOfCart, updateAmount } = useContext(CoffeContext)

    function handleRemoveItemOfCart() {
        removeItemOfCart(item)
    }

    function handleUpdateAmount(
        id:string, 
        type:"increment" | "decrement"
    ) {
        updateAmount(id, type)
    }

    return (
        <ContainerItemCart>
            <ImageCoffeCart
                src={item.coffeImage}
            />
            <NameInputContainer>
                <RowNamePrice>
                    <LabelNameItemCart>{item.coffeFlavorName}</LabelNameItemCart>
                    <LabelPriceCart>{toBrlPt(item.coffePrice * item.itemQuantity)}</LabelPriceCart>
                </RowNamePrice>
                <RowInputButton>
                    <InputAndButtonsContainer>
                        <button
                            onClick={() => handleUpdateAmount(item.id, 'decrement')}
                            disabled={item.itemQuantity <= 1}
                        >
                            <Minus size={16} />
                        </button>
                        <InputCart
                            id='itemsAmount'
                            type='number'
                            step={1}
                            min={1}
                            max={10}
                            value={item.itemQuantity}
                            readOnly
                        />
                        <button
                            disabled={item.itemQuantity >= 10}
                            onClick={() => handleUpdateAmount(item.id, 'increment')}
                        >
                            <Plus size={16} />
                        </button>
                    </InputAndButtonsContainer>
                    <ButtonRemoveCart
                        onClick={handleRemoveItemOfCart}
                    >
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