import { Bank, CreditCard, Money } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CoffeContext } from "../../contexts/CoffesContext";
import { FormCheckout } from "./components/FormCheckout";
import { ItemCart } from "./components/ItemCart/ItemCart";
import { PaymentMethods } from "./components/PaymenthsMethods";
import {
    ButtonConfirmOrder,
    CardCartContainer,
    CartComponentContainer,
    CheckoutMasterContainer,
    ContainerPaymentConfirm,
    FormAndPaymentContainer,
    ItemsCartContainer,
    RowFinalTotal,
    RowTotalItensEntrega,
    TitlesCheckout
} from "./styles";

interface TotalItemsCart {
    totalCart: number;
    totalCartFormatted?: string;
    totalCartFormattedWithDelivery?: string;
}

export function Checkout() {
    const { cartItems } = useContext(CoffeContext)

    const [totalCartItems, setTotalCartItems] = useState<TotalItemsCart>()

    useEffect(() => {

        if (cartItems.length > 0) {
            const totalCart = cartItems.map(el => el.totalItems).reduce((total, item) => total + item)
            var fretePlusTotal = totalCart + 3.50
            setTotalCartItems({
                totalCart: totalCart,
                totalCartFormatted: totalCart.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
                totalCartFormattedWithDelivery: fretePlusTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            })
        }


    }, [cartItems, totalCartItems])


    return (
        <CheckoutMasterContainer>
            <FormAndPaymentContainer>
                <TitlesCheckout>Complete seu pedido</TitlesCheckout>
                <FormCheckout />
                <PaymentMethods />
            </FormAndPaymentContainer>
            <CartComponentContainer>
                <TitlesCheckout>Cafés selecionados</TitlesCheckout>
                <CardCartContainer>
                    <ItemsCartContainer
                    >
                        {cartItems.map((item) => {
                            return (
                                <ItemCart
                                    key={item.id}
                                    item={item}
                                />
                            )
                        })

                        }
                    </ItemsCartContainer>
                    <ContainerPaymentConfirm>
                        <RowTotalItensEntrega>
                            <div>Total de itens</div>
                            <div>{totalCartItems?.totalCartFormatted}</div>
                        </RowTotalItensEntrega>
                        <RowTotalItensEntrega>
                            <div>Entrega</div>
                            <div>R$ 3,50</div>
                        </RowTotalItensEntrega>
                        <RowFinalTotal>
                            <div>Total</div>
                            <div>{totalCartItems?.totalCartFormattedWithDelivery}</div>
                        </RowFinalTotal>
                    </ContainerPaymentConfirm>
                    <ButtonConfirmOrder>CONFIRMAR PEDIDO</ButtonConfirmOrder>
                </CardCartContainer>
            </CartComponentContainer>
        </CheckoutMasterContainer>
    )
}