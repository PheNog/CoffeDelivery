import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { ContainerLabels, InfoPayments, InputHidden, LabelPayment, PaymentMethodContainer, TextAndIconContainer, TitleAndInfoContainer, TitlePayments } from "./styles";

export function PaymentMethods() {
    return (
        <PaymentMethodContainer>
            <TextAndIconContainer>
                <CurrencyDollar size={22} />
                <TitleAndInfoContainer>
                    <TitlePayments>Pagamento</TitlePayments>
                    <InfoPayments>O pagamento é feito na entrega. Escolha a forma que deseja pagar</InfoPayments>
                </TitleAndInfoContainer>
            </TextAndIconContainer>
            <ContainerLabels>
                <InputHidden
                    id="payment1"
                    type='checkbox'
                />
                <LabelPayment htmlFor="payment1">
                    <CreditCard
                        size={16}
                    />
                    CARTÃO DE CRÉDITO
                </LabelPayment>
                <InputHidden
                    id="payment2"
                    type='checkbox'
                />
                <LabelPayment htmlFor="payment2">
                    <Bank
                        size={16}
                    />
                    CARTÃO DE DÉBITO
                </LabelPayment>
                <InputHidden
                    id="payment3"
                    type='checkbox'
                />
                <LabelPayment htmlFor="payment3">
                    <Money
                        size={16}
                    />
                    DINHEIRO
                </LabelPayment>
            </ContainerLabels>
        </PaymentMethodContainer>
    )
}