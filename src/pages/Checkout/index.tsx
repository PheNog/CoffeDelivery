import { Bank, CreditCard, Money } from "phosphor-react";
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

export function Checkout() {
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
                    <ItemsCartContainer>
                        <ItemCart />
                        <ItemCart />
                    </ItemsCartContainer>
                    <ContainerPaymentConfirm>
                        <RowTotalItensEntrega>
                            <div>Total de itens</div>
                            <div>R$ 29,70</div>
                        </RowTotalItensEntrega>
                        <RowTotalItensEntrega>
                            <div>Entrega</div>
                            <div>R$ 3,50</div>
                        </RowTotalItensEntrega>
                        <RowFinalTotal>
                            <div>Total</div>
                            <div>R$ 33,20</div>
                        </RowFinalTotal>
                    </ContainerPaymentConfirm>
                    <ButtonConfirmOrder>CONFIRMAR PEDIDO</ButtonConfirmOrder>
                </CardCartContainer>
            </CartComponentContainer>
        </CheckoutMasterContainer>
    )
}