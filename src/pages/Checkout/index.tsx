import { Bank, CreditCard, Money } from "phosphor-react";
import { FormCheckout } from "./components/FormCheckout";
import { 
    CartComponent, 
    CheckoutMasterContainer, 
    ContainerLabels, 
    FormAndPaymentContainer, 
    InputHidden,  
    LabelPayment, 
    PaymentMethodContainer, 
    TitlesCheckout 
} from "./styles";

export function Checkout() {
    return (
        <CheckoutMasterContainer>
            <FormAndPaymentContainer>
                <TitlesCheckout>Complete seu pedido</TitlesCheckout>
                <FormCheckout />
                <PaymentMethodContainer>
                    <ContainerLabels>
                        <LabelPayment htmlFor="payment1">
                            <CreditCard 
                                size={16}
                            />
                            CARTÃO DE CRÉDITO
                        </LabelPayment>
                        <InputHidden
                            id="payment1"
                            type='checkbox'
                        />
                        <LabelPayment htmlFor="payment2">
                        <Bank 
                                size={16}
                            />
                            CARTÃO DE DÉBITO
                        </LabelPayment>
                        <InputHidden
                            id="payment2"
                            type='checkbox'
                        />
                        <LabelPayment htmlFor="payment3">
                        <Money
                                size={16}
                            />
                            DINHEIRO
                        </LabelPayment>
                        <InputHidden
                            id="payment3"
                            type='checkbox'
                        />
                    </ContainerLabels>
                </PaymentMethodContainer>
            </FormAndPaymentContainer>
            <CartComponent>
                <TitlesCheckout>Cafés selecionados</TitlesCheckout>

            </CartComponent>
        </CheckoutMasterContainer>
    )
}