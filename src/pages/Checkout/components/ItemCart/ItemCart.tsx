import { Minus, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeContext, CoffeDataProps } from "../../../../contexts/CoffesContext";
import { ButtonRemoveCart, ContainerItemCart, ImageCoffeCart, InputAndButtonsContainer, InputCart, InputNumberCart, LabelNameItemCart, LabelPriceCart, NameInputContainer, RowInputButton, RowNamePrice } from "./styles";

interface ItemCartProps {
    item: CoffeDataProps
}

export function ItemCart({ item }: ItemCartProps) {
    const { removeItemOfCart, cartItems } = useContext(CoffeContext)

    const [amountItem, setAmountItem] = useState(item.itemQuantity)


    function handleRemoveItemOfCart() {
        removeItemOfCart(item)
    }

    function handleIncrement() {
        setAmountItem(state => state + 1)
    }

    function handleDecrement() {
        setAmountItem(state => state - 1)
    }

    item.itemQuantity = amountItem
    item.totalItems = item.itemQuantity * item.coffePrice


    return (
        <ContainerItemCart>
            <ImageCoffeCart
                src={item.coffeImage}
            />
            <NameInputContainer>
                <RowNamePrice>
                    <LabelNameItemCart>{item.coffeFlavorName}</LabelNameItemCart>
                    <LabelPriceCart>R$ {item.coffePrice}</LabelPriceCart>
                </RowNamePrice>
                <RowInputButton>
                    <InputAndButtonsContainer>
                        <button
                            onClick={() => handleDecrement()}
                            disabled={amountItem <= 1}
                        >
                            <Minus size={16} />
                        </button>
                        <InputCart
                            id='itemsAmount'
                            type='number'
                            step={1}
                            min={1}
                            max={10}
                            disabled={ amountItem >= 10}
                            value={item.itemQuantity}
                            readOnly
                        />
                        <button
                            onClick={() => handleIncrement()}
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